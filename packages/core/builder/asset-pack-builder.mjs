import { createHash } from 'node:crypto';
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';

export function defineDesignAssetsConfig(config) {
  return config;
}

export async function loadDesignAssetsConfig(configPath) {
  const module = await import(pathToFileURL(configPath).href);
  return module.default ?? module.config;
}

export async function buildDesignAssetPack(config, options = {}) {
  const cwd = options.cwd ?? process.cwd();
  const isCheck = options.check ?? false;
  const entries = await collectAssets(config, cwd);
  const generatedRoot = resolvePath(cwd, config.output.generatedRoot);

  if (!isCheck) {
    await rm(generatedRoot, { recursive: true, force: true });
  }

  for (const entry of entries) {
    await writeIfChanged(
      join(resolvePath(cwd, config.output.publicRoot), entry.category, `${entry.name}.svg`),
      wrapSvgForExternalUse(entry),
      { isCheck },
    );
  }

  await writeIfChanged(
    join(resolvePath(cwd, config.output.publicRoot), 'manifest.json'),
    manifestJson(entries),
    { isCheck },
  );
  await writeIfChanged(
    join(generatedRoot, 'manifest.ts'),
    manifestTs(entries, config.manifest),
    { isCheck },
  );
  await writeIfChanged(
    join(generatedRoot, 'version.ts'),
    versionTs(entries, config.manifest),
    { isCheck },
  );

  if (config.angularInline) {
    await writeAngularInline(entries, config.angularInline, cwd, { isCheck });
  }

  options.logger?.(`Generated ${entries.length} design asset(s).`);
  return { entries };
}

async function collectAssets(config, cwd) {
  const entries = [];

  for (const source of config.sources) {
    const categorySources = await expandSource(source, cwd);
    for (const categorySource of categorySources) {
      const sourceDir = resolvePath(cwd, categorySource.sourceDir);
      const files = (await readdir(sourceDir)).filter((file) => file.endsWith('.svg')).sort();
      for (const file of files) {
        const sourcePath = join(sourceDir, file);
        const svg = await readFile(sourcePath, 'utf8');
        const name = file.replace(/\.svg$/, '');
        const entry = {
          category: categorySource.category,
          name,
          file,
          viewBox: viewBox(svg, sourcePath),
          sourcePath,
          svg,
        };
        validateEntry(entry, config);
        entries.push(entry);
      }
    }
  }

  entries.sort((a, b) => {
    if (a.category !== b.category) {
      return a.category.localeCompare(b.category);
    }
    return a.name.localeCompare(b.name);
  });

  return entries;
}

async function expandSource(source, cwd) {
  if (source.category) {
    return [{ category: source.category, sourceDir: source.sourceDir }];
  }

  const root = resolvePath(cwd, source.root);
  const categories = (source.categories ?? (await readdir(root))).sort();
  return categories.map((category) => ({
    category,
    sourceDir: join(source.root, category),
  }));
}

function validateEntry(entry, config) {
  const category = config.categories?.[entry.category];
  for (const validate of category?.validators ?? []) {
    validate(entry);
  }
}

function viewBox(svg, filePath) {
  const match = svg.match(/\bviewBox="([^"]+)"/);
  if (match?.[1]) {
    return match[1];
  }
  const width = svg.match(/\bwidth="([^"]+)"/)?.[1];
  const height = svg.match(/\bheight="([^"]+)"/)?.[1];
  if (width && height) {
    return `0 0 ${width} ${height}`;
  }
  throw new Error(`Missing viewBox in ${filePath}`);
}

function innerSvg(svg) {
  return svg
    .replace(/^\s*<\?xml[^>]*>\s*/i, '')
    .replace(/^<svg\b[^>]*>/, '')
    .replace(/<\/svg>\s*$/, '')
    .trim();
}

function wrapSvgForExternalUse(entry) {
  const fill = entry.category === 'icons' ? ' fill="none"' : '';
  const xlink = entry.svg.includes('xlink:href') ? ' xmlns:xlink="http://www.w3.org/1999/xlink"' : '';
  return `<svg id="asset" xmlns="http://www.w3.org/2000/svg"${xlink} viewBox="${entry.viewBox}"${fill}>\n${innerSvg(entry.svg)}\n</svg>\n`;
}

function manifestJson(entries) {
  return `${JSON.stringify(entries.map(({ category, name, viewBox }) => ({ category, name, viewBox })), null, 2)}\n`;
}

function manifestTs(entries, manifestConfig) {
  const exportName = manifestConfig.exportName;
  const typePrefix = manifestConfig.typePrefix;
  const categories = [...new Set(entries.map((entry) => entry.category))].sort();
  const lines = entries.map(
    ({ category, name, viewBox }) =>
      `  '${category}/${name}': { category: '${category}', name: '${name}', viewBox: '${viewBox}' },`,
  );
  const categoryTypes = categories
    .map((category) => {
      const typeName = manifestConfig.categoryTypeNames?.[category] ?? `${typePrefix}${pascalCase(singularCategory(category))}Name`;
      return `export type ${typeName} = Extract<${typePrefix}DesignAssetKey, \`${category}/\${string}\`> extends \`${category}/\${infer Name}\` ? Name : never;`;
    })
    .join('\n');

  return `export const ${exportName} = {\n${lines.join('\n')}\n} as const;\n\nexport type ${typePrefix}DesignAssetKey = keyof typeof ${exportName};\n${categoryTypes}\n`;
}

function versionTs(entries, manifestConfig) {
  const version = createHash('sha256')
    .update(JSON.stringify(entries.map(({ category, name, viewBox, svg }) => ({ category, name, viewBox, svg }))))
    .digest('hex')
    .slice(0, 12);
  return `export const ${constantCase(manifestConfig.typePrefix)}_DESIGN_ASSETS_VERSION = '${version}';\n`;
}

async function writeAngularInline(entries, angularConfig, cwd, writeOptions) {
  const outputRoot = resolvePath(cwd, angularConfig.outputRoot);
  const inlineCategories = new Set(angularConfig.categories);
  const componentsByCategory = new Map();

  for (const entry of entries.filter((asset) => inlineCategories.has(asset.category))) {
    const component = angularInlineComponent(entry, angularConfig);
    const components = componentsByCategory.get(component.category) ?? [];
    components.push(component);
    componentsByCategory.set(component.category, components);
    await writeIfChanged(join(outputRoot, component.category, component.fileName), component.source, writeOptions);
  }

  for (const [category, components] of componentsByCategory) {
    const exports = components
      .map((component) => `export { ${component.componentName} } from './${component.fileName.replace(/\.ts$/, '')}';`)
      .join('\n');
    await writeIfChanged(join(outputRoot, category, 'index.ts'), `${exports}\n`, writeOptions);
  }

  const rootExports = [...componentsByCategory.keys()]
    .sort()
    .map((category) => `export * from './${category}';`)
    .join('\n');
  await writeIfChanged(join(outputRoot, 'index.ts'), `${rootExports}\n`, writeOptions);
}

function angularInlineComponent(entry, config) {
  const suffix = config.suffixes?.[entry.category] ?? singularCategory(entry.category);
  const componentName = `${config.componentPrefix ?? ''}${pascalCase(entry.name)}${suffix}Component`;
  const selectorPrefix = config.selectorPrefixes?.[entry.category] ?? `${config.selectorPrefix ?? 'design-asset'}-${singularCategory(entry.category)}`;
  const rootFill = entry.category === 'icons' ? ' fill="none"' : '';

  return {
    category: entry.category,
    componentName,
    fileName: `${pascalCase(entry.name)}${suffix}Component.ts`,
    source: `import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: '${selectorPrefix}-${entry.name}',
  template: \`
    <svg viewBox="${entry.viewBox}"${rootFill} [attr.aria-hidden]="ariaLabel ? null : 'true'" [attr.role]="ariaLabel ? 'img' : null" [attr.aria-label]="ariaLabel || null" focusable="false">
      ${innerSvg(entry.svg)}
    </svg>
  \`,
})
export class ${componentName} {
  @Input() ariaLabel = '';
}
`,
  };
}

async function writeIfChanged(filePath, content, { isCheck }) {
  let previous = null;
  try {
    previous = await readFile(filePath, 'utf8');
  } catch {
    // file does not exist yet
  }
  if (previous === content) {
    return false;
  }
  if (isCheck) {
    throw new Error(`Generated file is out of date: ${filePath}`);
  }
  await mkdir(dirname(filePath), { recursive: true });
  await writeFile(filePath, content);
  return true;
}

function pascalCase(name) {
  return name
    .split('-')
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join('');
}

function singularCategory(category) {
  return category.endsWith('s') ? category.slice(0, -1) : category;
}

function constantCase(name) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .replace(/[-\s]+/g, '_')
    .toUpperCase();
}

function resolvePath(cwd, filePath) {
  return filePath.startsWith('/') ? filePath : join(cwd, filePath);
}
