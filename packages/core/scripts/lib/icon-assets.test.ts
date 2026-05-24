import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const ICON_SOURCE_DIR = join(import.meta.dirname, '..', '..', 'src', 'icons');

describe('icon source assets', () => {
  it('uses original generic geometry examples instead of UI-library-like icons', async () => {
    const files = (await readdir(ICON_SOURCE_DIR)).sort();

    expect(files).toEqual([
      'arrow-right.svg',
      'circle.svg',
      'diamond.svg',
      'plus.svg',
      'square.svg',
      'triangle.svg',
    ]);
  });
});
