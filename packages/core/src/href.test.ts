import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

import { ASSETS_VERSION } from '../generated/version.js';
import {
  buildAssetUrl,
  getIconHref,
  getIconUrl,
  getFlagHref,
  getFlagUrl,
} from './href.js';

describe('href helpers', () => {
  it('builds asset URL without an SVG fragment for image rendering', () => {
    expect(buildAssetUrl('/design-assets', 'icons', 'square', '1.4.2')).toBe(
      '/design-assets/icons/square.svg?v=1.4.2',
    );
    expect(getIconUrl('square', '/design-assets', null)).toBe(
      '/design-assets/icons/square.svg',
    );
  });

  it('builds href with version before fragment', () => {
    expect(getIconHref('square', '/design-assets', '1.4.2')).toBe(
      '/design-assets/icons/square.svg?v=1.4.2#asset',
    );
  });

  it('builds href without version', () => {
    expect(getIconHref('square', '/design-assets', null)).toBe(
      '/design-assets/icons/square.svg#asset',
    );
  });

  it('builds flag href with ISO code', () => {
    expect(getFlagHref('cz')).toContain('/flags/cz.svg');
    expect(getFlagHref('cz')).toMatch(/#asset$/);
    expect(getFlagUrl('cz')).toContain('/flags/cz.svg');
    expect(getFlagUrl('cz')).not.toMatch(/#asset$/);
  });

  it('ASSETS_VERSION matches package.json semver', async () => {
    const pkg = JSON.parse(
      await readFile(join(import.meta.dirname, '..', 'package.json'), 'utf8'),
    ) as { version: string };
    expect(ASSETS_VERSION).toBe(pkg.version);
    expect(ASSETS_VERSION).toMatch(/^\d+\.\d+\.\d+/);
  });
});
