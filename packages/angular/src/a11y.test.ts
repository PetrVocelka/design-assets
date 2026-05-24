import { describe, expect, it } from 'vitest';

import { resolveAccessibility } from './a11y';

describe('resolveAccessibility', () => {
  it('defaults to decorative', () => {
    expect(resolveAccessibility({})).toEqual({
      ariaHidden: true,
      role: undefined,
      ariaLabel: undefined,
    });
  });

  it('supports semantic labels', () => {
    expect(resolveAccessibility({ ariaLabel: 'Settings' })).toEqual({
      ariaHidden: undefined,
      role: 'img',
      ariaLabel: 'Settings',
    });
  });
});
