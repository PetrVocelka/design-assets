import { describe, expect, it } from 'vitest';

import {
  validateAssetContent,
  validateLifecycle,
} from './validate-assets.js';

describe('validateAssetContent', () => {
  it('rejects non-kebab-case icon names', () => {
    const issues = validateAssetContent({
      name: 'Settings',
      category: 'icons',
      sourceContent:
        '<svg viewBox="0 0 24 24" stroke="currentColor"><path/></svg>',
    });
    expect(issues.some((i) => i.level === 'error')).toBe(true);
  });

  it('rejects hardcoded colors in icons', () => {
    const issues = validateAssetContent({
      name: 'bad',
      category: 'icons',
      sourceContent:
        '<svg viewBox="0 0 24 24"><path fill="#ff0000"/></svg>',
    });
    expect(issues.some((i) => i.message.includes('currentColor'))).toBe(true);
  });

  it('allows trusted flag-icons SVG structure and larger source files', () => {
    const issues = validateAssetContent({
      name: 'cz',
      category: 'flags',
      sourceContent: `<svg viewBox="0 0 640 480">
        <defs><clipPath id="a"><path d="M0 0h640v480H0z"/></clipPath></defs>
        <g clip-path="url(#a)"><path d="${'M0 0h1v1H0z'.repeat(1000)}"/></g>
      </svg>`,
    });

    expect(issues.filter((i) => i.level === 'error')).toHaveLength(0);
  });

  it('rejects embedded text in brand assets', () => {
    const issues = validateAssetContent({
      name: 'logo-mark',
      category: 'brand',
      sourceContent:
        '<svg viewBox="0 0 220 40"><text x="44" y="24">Design Assets</text></svg>',
    });

    expect(issues.some((i) => i.message.includes('Forbidden <text>'))).toBe(
      true,
    );
  });
});

describe('validateLifecycle', () => {
  it('allows legitimate add', async () => {
    const issues = await validateLifecycle(
      [
        { name: 'square', category: 'icons' },
        { name: 'new-icon', category: 'icons' },
      ],
      [{ name: 'square', category: 'icons' }],
      {},
    );
    expect(issues.filter((i) => i.level === 'error')).toHaveLength(0);
  });

  it('fails silent delete', async () => {
    const issues = await validateLifecycle(
      [{ name: 'square', category: 'icons' }],
      [
        { name: 'square', category: 'icons' },
        { name: 'circle', category: 'icons' },
      ],
      {},
    );
    expect(issues.some((i) => i.message.includes('removed without'))).toBe(
      true,
    );
  });

  it('allows delete when previously deprecated', async () => {
    const issues = await validateLifecycle(
      [{ name: 'square', category: 'icons' }],
      [
        { name: 'square', category: 'icons' },
        { name: 'circle', category: 'icons', deprecated: true },
      ],
      {},
    );
    expect(issues.filter((i) => i.level === 'error')).toHaveLength(0);
  });

  it('fails rename pattern (add + remove)', async () => {
    const issues = await validateLifecycle(
      [{ name: 'new-name', category: 'icons' }],
      [{ name: 'old-name', category: 'icons' }],
      {},
    );
    expect(issues.some((i) => i.message.includes('rename'))).toBe(true);
  });
});
