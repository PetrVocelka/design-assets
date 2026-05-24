import { describe, expect, it } from 'vitest';

import { collectAssets } from './collect-assets.js';

describe('collectAssets', () => {
  it('collects all ISO alpha-2 flags from flag-icons instead of a demo subset', async () => {
    const assets = await collectAssets();
    const flags = assets.filter((asset) => asset.category === 'flags');

    expect(flags.length).toBeGreaterThan(200);
    expect(flags.map((flag) => flag.name)).toEqual(
      [...flags.map((flag) => flag.name)].sort(),
    );
    expect(flags.every((flag) => /^[a-z]{2}$/.test(flag.name))).toBe(true);
    expect(flags.some((flag) => flag.name === 'cz')).toBe(true);
    expect(flags.some((flag) => flag.name === 'xx')).toBe(false);
  });
});
