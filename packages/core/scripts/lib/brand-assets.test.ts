import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const BRAND_SOURCE_DIR = join(import.meta.dirname, '..', '..', 'src', 'brand');

describe('brand source assets', () => {
  it('uses CSS variables for light and dark mode theming', async () => {
    const logoMark = await readFile(join(BRAND_SOURCE_DIR, 'logo-mark.svg'), 'utf8');

    expect(logoMark).toContain('var(--da-brand-mark-background');
    expect(logoMark).toContain('var(--da-brand-mark-primary');
    expect(logoMark).toContain('var(--da-brand-mark-foreground');
  });

  it('keeps brand assets logo-only without embedded text', async () => {
    const assetFiles = await readdir(BRAND_SOURCE_DIR);
    const svgFiles = assetFiles.filter((file) => file.endsWith('.svg'));

    expect(svgFiles).toEqual(['logo-mark.svg']);

    await Promise.all(
      svgFiles.map(async (file) => {
        const asset = await readFile(join(BRAND_SOURCE_DIR, file), 'utf8');
        expect(asset).toContain('viewBox="0 0 64 64"');
        expect(asset).not.toMatch(/<text[\s>]/i);
        expect(asset).not.toMatch(/<(?:mask|clipPath|filter)[\s>]/i);
      }),
    );
  });
});
