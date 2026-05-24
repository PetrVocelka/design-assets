import type { PictogramName } from '../generated/names.js';

export const emojiToPictogram = {
  '📊': 'grade-chart',
  '🎓': 'scholarship',
  '🏫': 'school',
  '📈': 'percentage',
  '⚖️': 'weighted-average',
  '📋': 'excel-table',
} as const satisfies Readonly<Record<string, PictogramName>>;
