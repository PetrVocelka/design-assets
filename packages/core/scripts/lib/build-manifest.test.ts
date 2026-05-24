import { describe, expect, it } from 'vitest';

import { buildManifest } from './build-manifest.js';
import type { OptimizedAsset } from './types.js';

function fakeAsset(
  overrides: Partial<OptimizedAsset> & Pick<OptimizedAsset, 'name' | 'category'>,
): OptimizedAsset {
  return {
    sourcePath: `/src/${overrides.category}/${overrides.name}.svg`,
    sourceContent: '<svg viewBox="0 0 24 24"></svg>',
    optimizedContent: '<svg viewBox="0 0 24 24"></svg>',
    viewBox: '0 0 24 24',
    colorMode: 'monochrome',
    innerHtml: '',
    ...overrides,
  };
}

describe('buildManifest', () => {
  it('builds manifest entries from optimized assets', () => {
    const manifest = buildManifest([
      fakeAsset({ name: 'square', category: 'icons' }),
      fakeAsset({
        name: 'grade-chart',
        category: 'pictograms',
        viewBox: '0 0 48 48',
        colorMode: 'colored',
      }),
    ]);

    expect(manifest['icons/square']).toMatchObject({
      name: 'square',
      category: 'icons',
      viewBox: '0 0 24 24',
      colorMode: 'monochrome',
    });
    expect(manifest['pictograms/grade-chart']?.colorMode).toBe('colored');
  });
});
