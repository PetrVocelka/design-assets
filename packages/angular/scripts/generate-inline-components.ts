import { mkdir, readdir, readFile, writeFile, rm } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ANGULAR_ROOT = join(__dirname, '..');
const CORE_INLINE = join(ANGULAR_ROOT, '..', 'core', 'generated', 'inline');
const OUTPUT_ROOT = join(ANGULAR_ROOT, 'generated', 'inline');

function kebabToPascal(name: string): string {
  return name
    .replace(/-([a-z0-9])/g, (_, c: string) => c.toUpperCase())
    .replace(/^([a-z])/, (_, c: string) => c.toUpperCase());
}

function componentName(category: string, assetName: string): string {
  if (category === 'brand') return `${kebabToPascal(assetName)}Component`;
  if (category === 'flags') return `Flag${assetName.toUpperCase()}Component`;
  const suffix: Record<string, string> = {
    icons: 'IconComponent',
    pictograms: 'PictogramComponent',
    illustrations: 'IllustrationComponent',
  };
  return `${kebabToPascal(assetName)}${suffix[category] ?? 'Component'}`;
}

function selector(category: string, assetName: string): string {
  if (category === 'brand') return `da-ng-${assetName}`;
  if (category === 'flags') return `da-ng-flag-${assetName}`;
  const prefix: Record<string, string> = {
    icons: 'da-ng',
    pictograms: 'da-ng',
    illustrations: 'da-ng',
  };
  return `${prefix[category] ?? 'da-ng'}-${assetName}`;
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

function coreInlineImport(category: string, assetName: string): string {
  return `../../../../core/generated/inline/${category}/${assetName}`;
}

async function writeInlineAssetComponent(): Promise<void> {
  const source = await readFile(
    join(ANGULAR_ROOT, 'src', 'inline', 'inline-asset.component.ts'),
    'utf8',
  );
  const adapted = source.replace(
    "from '../a11y'",
    "from '../../src/a11y'",
  );
  await writeFile(join(OUTPUT_ROOT, 'inline-asset.component.ts'), adapted, 'utf8');
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
    const tag = selector(category, assetName);
    componentNames.push(compName);

    const content = `// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline ${category}/${assetName} component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ${inlineVar} } from '${coreInlineImport(category, assetName)}';
import { InlineAssetComponent } from '../inline-asset.component';

@Component({
  selector: '${tag}',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [InlineAssetComponent],
  template: \`
    <da-ng-inline-asset
      [spec]="spec"
      [class]="className()"
      [decorative]="decorative()"
      [ariaLabel]="ariaLabel()"
    />
  \`,
})
export class ${compName} {
  readonly className = input<string>('', { alias: 'class' });
  readonly decorative = input<boolean | undefined>(undefined);
  readonly ariaLabel = input<string | undefined>(undefined);

  protected readonly spec = ${inlineVar};
}
`;

    await writeFile(join(outDir, `${compName}.ts`), content, 'utf8');
  }

  const categoryExports = componentNames.map(
    (name) => `export { ${name} } from './${name}';`,
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
  await writeInlineAssetComponent();

  const categories = (await readdir(CORE_INLINE)).filter((c) => c !== 'index.ts');
  const barrelExports: string[] = [];

  for (const category of categories.sort()) {
    const names = await generateCategory(category);
    for (const name of names) {
      barrelExports.push(`export { ${name} } from './${category}/${name}';`);
    }
  }

  await writeFile(
    join(OUTPUT_ROOT, 'index.ts'),
    `// AUTO-GENERATED. DO NOT EDIT.\n${barrelExports.join('\n')}\n`,
  );

  console.log('Generated inline Angular components.');
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
