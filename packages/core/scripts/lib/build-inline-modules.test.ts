import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { describe, expect, it, afterEach } from 'vitest';

import {
  buildInlineModules,
  inlineExportName,
} from './build-inline-modules.js';
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

describe('buildInlineModules', () => {
  let tempDir: string;

  afterEach(async () => {
    if (tempDir) {
      await rm(tempDir, { recursive: true, force: true });
    }
  });

  it('emits one module per asset', async () => {
    tempDir = await mkdtemp(join(tmpdir(), 'inline-out-'));
    await buildInlineModules([fakeAsset('square', 'icons')], tempDir);

    const content = await readFile(join(tempDir, 'icons/square.ts'), 'utf8');
    expect(content).toContain('squareIconInline');
    expect(content).toContain("viewBox: '0 0 24 24'");
  });

  it('names inline exports with category suffix', () => {
    expect(inlineExportName('square', 'icons')).toBe('squareIconInline');
    expect(inlineExportName('grade-chart', 'pictograms')).toBe(
      'gradeChartPictogramInline',
    );
    expect(inlineExportName('logo-mark', 'brand')).toBe('logoMarkBrandInline');
    expect(inlineExportName('cz', 'flags')).toBe('czFlagInline');
  });
});
