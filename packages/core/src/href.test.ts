import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

import { ASSETS_VERSION } from '../generated/version.js';
import {
  getIconHref,
  getFlagHref,
} from './href.js';

describe('href helpers', () => {
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
  });

  it('ASSETS_VERSION matches package.json semver', async () => {
    const pkg = JSON.parse(
      await readFile(join(import.meta.dirname, '..', 'package.json'), 'utf8'),
    ) as { version: string };
    expect(ASSETS_VERSION).toBe(pkg.version);
    expect(ASSETS_VERSION).toMatch(/^\d+\.\d+\.\d+/);
  });
});
