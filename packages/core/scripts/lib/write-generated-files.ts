import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import type { AssetManifest } from './types.js';
import { manifestToSortedArray } from './build-manifest.js';
import { writeTextFile } from './build-svg-files.js';

export async function writeGeneratedFiles(
  generatedRoot: string,
  manifest: AssetManifest,
  packageVersion: string,
): Promise<void> {
  const entries = manifestToSortedArray(manifest);

  const namesByCategory = {
    icons: entries.filter((e) => e.category === 'icons').map((e) => e.name),
    pictograms: entries
      .filter((e) => e.category === 'pictograms')
      .map((e) => e.name),
    illustrations: entries
      .filter((e) => e.category === 'illustrations')
      .map((e) => e.name),
    brand: entries.filter((e) => e.category === 'brand').map((e) => e.name),
    flags: entries.filter((e) => e.category === 'flags').map((e) => e.name),
  };

  await writeTextFile(
    join(generatedRoot, 'manifest.ts'),
    `// AUTO-GENERATED. DO NOT EDIT.
export type ColorMode = 'monochrome' | 'colored';
export type AssetCategory = 'icons' | 'pictograms' | 'illustrations' | 'brand' | 'flags';

export interface ManifestEntry {
  name: string;
  category: AssetCategory;
  viewBox: string;
  colorMode: ColorMode;
  deprecated?: true;
  deprecatedReason?: string;
  replacement?: string;
  sourcePackage?: 'flag-icons';
  sourceVersion?: string;
  sourcePath?: string;
}

export type AssetManifest = Record<string, ManifestEntry & { id: string }>;

export const manifest = ${JSON.stringify(manifest, null, 2)} as const satisfies AssetManifest;

export default manifest;
`,
  );

  await writeTextFile(
    join(generatedRoot, 'manifest.json'),
    `${JSON.stringify(entries, null, 2)}\n`,
  );

  await writeTextFile(
    join(generatedRoot, 'names.ts'),
    `// AUTO-GENERATED. DO NOT EDIT.
export type IconName = ${namesByCategory.icons.map((n) => `'${n}'`).join(' | ') || 'never'};
export type PictogramName = ${namesByCategory.pictograms.map((n) => `'${n}'`).join(' | ') || 'never'};
export type IllustrationName = ${namesByCategory.illustrations.map((n) => `'${n}'`).join(' | ') || 'never'};
export type BrandAssetName = ${namesByCategory.brand.map((n) => `'${n}'`).join(' | ') || 'never'};
export type CountryCode = ${namesByCategory.flags.map((n) => `'${n}'`).join(' | ') || 'never'};
export type AssetCategory = 'icons' | 'pictograms' | 'illustrations' | 'brand' | 'flags';
`,
  );

  await writeTextFile(
    join(generatedRoot, 'version.ts'),
    `// AUTO-GENERATED. DO NOT EDIT.
export const ASSETS_VERSION = '${packageVersion}' as const;
`,
  );

  await writeTextFile(
    join(generatedRoot, 'index.ts'),
    `// AUTO-GENERATED. DO NOT EDIT.
export { manifest } from './manifest.js';
export type { AssetManifest } from '../scripts/lib/types.js';
export {
  type IconName,
  type PictogramName,
  type IllustrationName,
  type BrandAssetName,
  type CountryCode,
  type AssetCategory,
} from './names.js';
export { ASSETS_VERSION } from './version.js';
`,
  );
}

export async function readPackageVersion(coreRoot: string): Promise<string> {
  const pkg = JSON.parse(
    await readFile(join(coreRoot, 'package.json'), 'utf8'),
  ) as { version: string };
  return pkg.version;
}
