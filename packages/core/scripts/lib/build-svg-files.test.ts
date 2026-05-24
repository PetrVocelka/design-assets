import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { describe, expect, it, afterEach } from 'vitest';

import { buildSvgFiles } from './build-svg-files.js';
import { buildAssetHref } from '../../src/href.js';
import type { OptimizedAsset } from './types.js';

function fakeAsset(name: string, category: OptimizedAsset['category']): OptimizedAsset {
  return {
    name,
    category,
    sourcePath: `/src/${category}/${name}.svg`,
    sourceContent: '<svg viewBox="0 0 24 24"><path d="M0 0"/></svg>',
    optimizedContent: '<svg viewBox="0 0 24 24"><path d="M0 0"/></svg>',
    viewBox: '0 0 24 24',
    colorMode: 'monochrome',
    innerHtml: '<path d="M0 0"/>',
  };
}

describe('buildSvgFiles', () => {
  let tempDir: string;

  afterEach(async () => {
    if (tempDir) {
      await rm(tempDir, { recursive: true, force: true });
    }
  });

  it('emits one optimized file per asset with id="asset"', async () => {
    tempDir = await mkdtemp(join(tmpdir(), 'svg-out-'));
    const assets = [fakeAsset('square', 'icons'), fakeAsset('circle', 'icons')];

    const written = await buildSvgFiles(assets, tempDir);
    expect(written.size).toBe(2);

    const content = await readFile(join(tempDir, 'icons/square.svg'), 'utf8');
    expect(content).toContain('id="asset"');
    expect(content).toContain('xmlns="http://www.w3.org/2000/svg"');
    expect(content).toContain('viewBox="0 0 24 24"');
  });

  it('href helpers use #asset fragment with version before fragment', () => {
    const href = buildAssetHref('/design-assets', 'icons', 'square', '1.0.0');
    expect(href).toBe('/design-assets/icons/square.svg?v=1.0.0#asset');
  });
});
