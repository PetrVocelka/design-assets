import type { Config } from 'tailwindcss';
import preset from '@design-assets/tailwind-preset';
import { ICON_SIZE_SAFELIST } from '@design-assets/tailwind-preset/icon-sizes';

const DOCS_SIZE_SAFELIST = [
  ...ICON_SIZE_SAFELIST,
  'size-8',
  'size-12',
  'size-16',
  'size-24',
  'h-3',
  'w-3',
  'h-4',
  'w-4',
  'h-5',
  'w-5',
  'h-6',
  'w-6',
  'h-8',
  'w-8',
  'shrink-0',
  'inline-block',
];

export default {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  presets: [preset],
  safelist: DOCS_SIZE_SAFELIST,
} satisfies Config;
