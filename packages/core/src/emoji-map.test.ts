import { describe, expect, it } from 'vitest';

import { emojiToPictogram } from './emoji-map.js';
import type { PictogramName } from '../generated/names.js';

describe('emojiToPictogram', () => {
  it('maps emojis to valid pictogram names', () => {
    expect(emojiToPictogram['📊']).toBe('grade-chart');
    const values = Object.values(emojiToPictogram);
    const firstPictogramName: PictogramName = values[0]!;
    expect(firstPictogramName).toBeTruthy();
    expect(values.length).toBeGreaterThan(0);
  });
});
