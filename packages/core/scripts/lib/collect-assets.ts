import { readdir, readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

import {
  ASSET_CATEGORIES,
  type AssetCategory,
  type RawAsset,
} from './types.js';
import isoCodes from './iso-3166-1-alpha-2.json' with { type: 'json' };

const __dirname = dirname(fileURLToPath(import.meta.url));
const CORE_ROOT = join(__dirname, '..', '..');
const SRC_ROOT = join(CORE_ROOT, 'src');
const ISO_SET = new Set<string>(isoCodes);

const require = createRequire(import.meta.url);

function resolveFlagIconsVersion(): string {
  try {
    const pkg = require('flag-icons/package.json') as { version: string };
    return pkg.version;
  } catch {
    return 'unknown';
  }
}

async function collectCategoryAssets(
  category: Exclude<AssetCategory, 'flags'>,
): Promise<RawAsset[]> {
  const categoryDir = join(SRC_ROOT, category);
  const files = (await readdir(categoryDir)).filter((f) => f.endsWith('.svg'));
  files.sort();

  return Promise.all(
    files.map(async (file) => {
      const name = file.replace(/\.svg$/, '');
      const sourcePath = join(categoryDir, file);
      const sourceContent = await readFile(sourcePath, 'utf8');
      return { name, category, sourcePath, sourceContent };
    }),
  );
}

async function collectFlagAssets(): Promise<RawAsset[]> {
  const flagIconsRoot = dirname(require.resolve('flag-icons/package.json'));
  const flagDir = join(flagIconsRoot, 'flags', '4x3');
  const sourceVersion = resolveFlagIconsVersion();
  const codes = (await readdir(flagDir))
    .filter((file) => file.endsWith('.svg'))
    .map((file) => file.replace(/\.svg$/, ''))
    .filter((code) => /^[a-z]{2}$/.test(code) && ISO_SET.has(code))
    .sort();

  return Promise.all(
    codes.map(async (code) => {
      const relativePath = `flags/4x3/${code}.svg`;
      const sourcePath = join(flagIconsRoot, relativePath);
      const sourceContent = await readFile(sourcePath, 'utf8');
      return {
        name: code,
        category: 'flags' as const,
        sourcePath,
        sourceContent,
        flagMeta: {
          sourcePackage: 'flag-icons' as const,
          sourceVersion,
          sourcePath: relativePath,
        },
      };
    }),
  );
}

export async function collectAssets(): Promise<RawAsset[]> {
  const assets: RawAsset[] = [];

  for (const category of ASSET_CATEGORIES) {
    if (category === 'flags') {
      assets.push(...(await collectFlagAssets()));
      continue;
    }
    assets.push(...(await collectCategoryAssets(category)));
  }

  assets.sort((a, b) => {
    if (a.category !== b.category) {
      return a.category.localeCompare(b.category);
    }
    return a.name.localeCompare(b.name);
  });

  return assets;
}
