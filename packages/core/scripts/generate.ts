import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { collectAssets } from './lib/collect-assets.js';
import { optimizeSvg } from './lib/optimize-svg.js';
import { buildManifest } from './lib/build-manifest.js';
import { buildSvgFiles } from './lib/build-svg-files.js';
import { buildInlineModules } from './lib/build-inline-modules.js';
import {
  readPackageVersion,
  writeGeneratedFiles,
} from './lib/write-generated-files.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CORE_ROOT = join(__dirname, '..');
const GENERATED_ROOT = join(CORE_ROOT, 'generated');

async function main(): Promise<void> {
  console.log('Collecting source assets…');
  const rawAssets = await collectAssets();

  console.log(`Optimizing ${rawAssets.length} assets…`);
  const optimized = rawAssets.map(optimizeSvg);

  console.log('Building manifest…');
  const manifest = buildManifest(optimized);
  const version = await readPackageVersion(CORE_ROOT);

  console.log('Writing per-icon SVG files…');
  await buildSvgFiles(optimized, join(GENERATED_ROOT, 'svg'));

  console.log('Writing inline modules…');
  await buildInlineModules(optimized, join(GENERATED_ROOT, 'inline'));

  console.log('Writing generated TypeScript…');
  await writeGeneratedFiles(GENERATED_ROOT, manifest, version);

  console.log('Done.');
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
