#!/usr/bin/env node
import { cp, mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import { access } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { ASSET_CATEGORIES, type AssetCategory } from '../scripts/lib/types.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function resolveCoreRoot(): Promise<string> {
  const candidates = [join(__dirname, '..'), join(__dirname, '..', '..')];
  for (const root of candidates) {
    try {
      await access(join(root, 'generated', 'svg'));
      return root;
    } catch {
      // try next candidate (dist/bin vs source bin)
    }
  }
  throw new Error(
    'Could not locate packages/core/generated/svg. Run: yarn workspace @petrvocelka/design-assets-core generate',
  );
}

const CORE_ROOT = await resolveCoreRoot();
const GENERATED_SVG = join(CORE_ROOT, 'generated', 'svg');
const GENERATED_MANIFEST = join(CORE_ROOT, 'generated', 'manifest.json');

interface CopyOptions {
  destDir: string;
  category?: string;
  categories?: string[];
  noManifest?: boolean;
  noVersion?: boolean;
  clean?: boolean;
  force?: boolean;
}

const BUILT_IN_CATEGORIES = new Set<string>(ASSET_CATEGORIES);

async function directoryIsEmpty(dir: string): Promise<boolean> {
  try {
    const entries = await readdir(dir);
    return entries.length === 0;
  } catch {
    return true;
  }
}

async function copyCategory(
  srcCategory: string,
  destDir: string,
): Promise<number> {
  const src = join(GENERATED_SVG, srcCategory);
  const dest = join(destDir, srcCategory);
  await rm(dest, { recursive: true, force: true });
  await cp(src, dest, { recursive: true });
  const files = (await readdir(src)).filter((f) => f.endsWith('.svg'));
  return files.length;
}

function normalizeCategories(options: Pick<CopyOptions, 'category' | 'categories'>): AssetCategory[] | undefined {
  const requested = options.categories ?? (options.category ? [options.category] : undefined);
  if (!requested) {
    return undefined;
  }

  const categories = requested.flatMap((category) =>
    category
      .split(',')
      .map((part) => part.trim())
      .filter(Boolean),
  );
  const unknown = categories.filter((category) => !BUILT_IN_CATEGORIES.has(category));

  if (unknown.length > 0) {
    throw new Error(
      `Unknown design asset categor${unknown.length === 1 ? 'y' : 'ies'}: ${unknown.join(
        ', ',
      )}. Expected one of: ${ASSET_CATEGORIES.join(', ')}`,
    );
  }

  return [...new Set(categories)] as AssetCategory[];
}

async function writeManifest(destDir: string, categories?: AssetCategory[]): Promise<void> {
  if (!categories) {
    await cp(GENERATED_MANIFEST, join(destDir, 'manifest.json'));
    return;
  }

  const manifest = JSON.parse(await readFile(GENERATED_MANIFEST, 'utf8')) as Array<{
    category: AssetCategory;
  }>;
  const categorySet = new Set(categories);
  const filtered = manifest.filter((entry) => categorySet.has(entry.category));

  await writeFile(join(destDir, 'manifest.json'), `${JSON.stringify(filtered, null, 2)}\n`);
}

export async function runCopy(options: CopyOptions): Promise<void> {
  const { destDir, noManifest, noVersion, clean, force } = options;
  const categories = normalizeCategories(options);

  try {
    await stat(GENERATED_SVG);
  } catch {
    throw new Error(
      'Generated SVG files not found. Run: yarn workspace @petrvocelka/design-assets-core generate',
    );
  }

  if (clean) {
    const isEmpty = await directoryIsEmpty(destDir);
    if (!isEmpty && !force) {
      throw new Error(
        `Destination ${destDir} is not empty. Use --force with --clean to wipe it.`,
      );
    }
    await rm(destDir, { recursive: true, force: true });
  }

  await mkdir(destDir, { recursive: true });

  let copied = 0;
  if (categories) {
    for (const category of categories) {
      copied += await copyCategory(category, destDir);
    }
  } else {
    const allCategories = await readdir(GENERATED_SVG);
    for (const cat of allCategories.sort()) {
      copied += await copyCategory(cat, destDir);
    }
  }

  if (!noManifest) {
    await writeManifest(destDir, categories);
  }

  if (!noVersion) {
    const pkg = JSON.parse(
      await readFile(join(CORE_ROOT, 'package.json'), 'utf8'),
    ) as { name: string; version: string };

    await writeFile(
      join(destDir, 'version.json'),
      `${JSON.stringify(
        {
          name: pkg.name,
          version: pkg.version,
          generatedAt: new Date().toISOString(),
        },
        null,
        2,
      )}\n`,
    );
  }

  console.log(`Copied ${copied} SVG file(s) to ${destDir}`);
}

function parseArgs(argv: string[]): CopyOptions {
  const args = [...argv];
  if (args[0] === 'copy') {
    args.shift();
  }

  const destDir = args.find((a) => !a.startsWith('--'));
  if (!destDir) {
    throw new Error(
      'Usage: design-assets copy <destDir> [--category <name>] [--categories icons,brand] [--no-manifest] [--no-version] [--clean] [--force]',
    );
  }

  const getFlagValue = (flag: string): string | undefined => {
    const index = args.indexOf(flag);
    return index >= 0 ? args[index + 1] : undefined;
  };

  return {
    destDir,
    category: getFlagValue('--category'),
    categories: getFlagValue('--categories')?.split(','),
    noManifest: args.includes('--no-manifest'),
    noVersion: args.includes('--no-version'),
    clean: args.includes('--clean'),
    force: args.includes('--force'),
  };
}

async function main(): Promise<void> {
  const options = parseArgs(process.argv.slice(2));
  await runCopy(options);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  });
}
