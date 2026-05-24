import { mkdir, writeFile, rm } from 'node:fs/promises';
import { join } from 'node:path';

import { wrapSvgForExternalUse } from './optimize-svg.js';
import type { OptimizedAsset } from './types.js';

export async function buildSvgFiles(
  assets: OptimizedAsset[],
  outputRoot: string,
): Promise<Map<string, string>> {
  const written = new Map<string, string>();

  await rm(outputRoot, { recursive: true, force: true });

  for (const asset of assets) {
    const dir = join(outputRoot, asset.category);
    await mkdir(dir, { recursive: true });
    const filePath = join(dir, `${asset.name}.svg`);
    const content = wrapSvgForExternalUse(asset);
    await writeFile(filePath, content, 'utf8');
    written.set(`${asset.category}/${asset.name}`, filePath);
  }

  return written;
}

export async function writeTextFile(
  filePath: string,
  content: string,
): Promise<void> {
  const { dirname } = await import('node:path');
  await mkdir(dirname(filePath), { recursive: true });
  await writeFile(filePath, content, 'utf8');
}
