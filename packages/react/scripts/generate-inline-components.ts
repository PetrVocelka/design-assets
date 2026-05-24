import { mkdir, readdir, writeFile, rm } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REACT_ROOT = join(__dirname, '..');
const CORE_INLINE = join(REACT_ROOT, '..', 'core', 'generated', 'inline');
const OUTPUT_ROOT = join(REACT_ROOT, 'generated', 'inline');

function kebabToPascal(name: string): string {
  return name
    .replace(/-([a-z0-9])/g, (_, c: string) => c.toUpperCase())
    .replace(/^([a-z])/, (_, c: string) => c.toUpperCase());
}

function componentName(category: string, assetName: string): string {
  if (category === 'brand') return kebabToPascal(assetName);
  if (category === 'flags') return `Flag${assetName.toUpperCase()}`;
  const suffix: Record<string, string> = {
    icons: 'Icon',
    pictograms: 'Pictogram',
    illustrations: 'Illustration',
  };
  return `${kebabToPascal(assetName)}${suffix[category] ?? 'Asset'}`;
}

function inlineImportName(category: string, assetName: string): string {
  if (category === 'brand') {
    return `${assetName.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())}BrandInline`;
  }
  if (category === 'flags') return `${assetName}FlagInline`;
  const suffixMap: Record<string, string> = {
    icons: 'IconInline',
    pictograms: 'PictogramInline',
    illustrations: 'IllustrationInline',
  };
  const camel = assetName.replace(/-([a-z0-9])/g, (_, c: string) => c.toUpperCase());
  return `${camel}${suffixMap[category] ?? 'Inline'}`;
}

async function generateCategory(category: string): Promise<string[]> {
  const categoryDir = join(CORE_INLINE, category);
  const files = (await readdir(categoryDir)).filter(
    (f) => f.endsWith('.ts') && f !== 'index.ts',
  );
  files.sort();

  const outDir = join(OUTPUT_ROOT, category);
  await mkdir(outDir, { recursive: true });

  const componentNames: string[] = [];

  for (const file of files) {
    const assetName = file.replace(/\.ts$/, '');
    const inlineVar = inlineImportName(category, assetName);
    const compName = componentName(category, assetName);
    componentNames.push(compName);

    const content = `// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline ${category}/${assetName} component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { ${inlineVar} } from '@design-assets/core/generated/inline/${category}/${assetName}.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type ${compName}Props = AccessibleProps & {
  className?: string;
};

export function ${compName}({ className, ...a11y }: ${compName}Props) {
  return renderInline({ spec: ${inlineVar}, className, ...a11y });
}
`;

    await writeFile(join(outDir, `${compName}.tsx`), content, 'utf8');
  }

  const categoryExports = componentNames.map(
    (name) => `export { ${name} } from './${name}.js';`,
  );
  await writeFile(
    join(outDir, 'index.ts'),
    `// AUTO-GENERATED. DO NOT EDIT.\n${categoryExports.join('\n')}\n`,
  );

  return componentNames;
}

async function main(): Promise<void> {
  await rm(OUTPUT_ROOT, { recursive: true, force: true });
  await mkdir(OUTPUT_ROOT, { recursive: true });

  const categories = (await readdir(CORE_INLINE)).filter((c) => c !== 'index.ts');
  const barrelExports: string[] = [];

  for (const category of categories.sort()) {
    const names = await generateCategory(category);
    for (const name of names) {
      barrelExports.push(`export { ${name} } from './${category}/${name}.js';`);
    }
  }

  await writeFile(
    join(OUTPUT_ROOT, 'index.ts'),
    `// AUTO-GENERATED. DO NOT EDIT.\n${barrelExports.join('\n')}\n`,
  );

  console.log('Generated inline React components.');
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
