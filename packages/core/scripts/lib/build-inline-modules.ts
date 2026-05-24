import { mkdir, writeFile, rm } from 'node:fs/promises';
import { join } from 'node:path';

import type { OptimizedAsset } from './types.js';

const CATEGORY_SUFFIX: Record<string, string> = {
  icons: 'Icon',
  pictograms: 'Pictogram',
  illustrations: 'Illustration',
  brand: 'Brand',
  flags: 'Flag',
};

export function kebabToCamel(name: string): string {
  return name.replace(/-([a-z0-9])/g, (_, char: string) => char.toUpperCase());
}

export function inlineExportName(name: string, category: string): string {
  if (category === 'brand') {
    return `${kebabToCamel(name)}BrandInline`;
  }
  if (category === 'flags') {
    return `${name}FlagInline`;
  }
  const suffix = CATEGORY_SUFFIX[category] ?? 'Asset';
  return `${kebabToCamel(name)}${suffix}Inline`;
}

export function buildInlineModuleContent(asset: OptimizedAsset): string {
  const exportName = inlineExportName(asset.name, asset.category);
  const escapedInner = asset.innerHtml
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '');

  return `// AUTO-GENERATED. DO NOT EDIT.
export const ${exportName} = {
  viewBox: '${asset.viewBox}',
  innerHtml: '${escapedInner}',
  colorMode: '${asset.colorMode}',
} as const;
`;
}

export async function buildInlineModules(
  assets: OptimizedAsset[],
  outputRoot: string,
): Promise<void> {
  await rm(outputRoot, { recursive: true, force: true });

  const byCategory = new Map<string, OptimizedAsset[]>();

  for (const asset of assets) {
    const list = byCategory.get(asset.category) ?? [];
    list.push(asset);
    byCategory.set(asset.category, list);
  }

  for (const [category, categoryAssets] of byCategory) {
    const categoryDir = join(outputRoot, category);
    await mkdir(categoryDir, { recursive: true });

    const exports: string[] = [];

    for (const asset of categoryAssets.sort((a, b) =>
      a.name.localeCompare(b.name),
    )) {
      const exportName = inlineExportName(asset.name, asset.category);
      const filePath = injectionSafePath(categoryDir, asset.name);
      await writeFile(filePath, buildInlineModuleContent(asset), 'utf8');
      exports.push(`export { ${exportName} } from './${asset.name}.js';`);
    }

    await writeFile(
      join(categoryDir, 'index.ts'),
      `// AUTO-GENERATED. DO NOT EDIT.\n${exports.join('\n')}\n`,
      'utf8',
    );
  }

  const categoryExports = [...byCategory.keys()]
    .sort()
    .map((category) => `export * from './${category}/index.js';`);

  await writeFile(
    join(outputRoot, 'index.ts'),
    `// AUTO-GENERATED. DO NOT EDIT.\n${categoryExports.join('\n')}\n`,
    'utf8',
  );
}

function injectionSafePath(dir: string, name: string): string {
  return join(dir, `${name}.ts`);
}
