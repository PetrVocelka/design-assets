import type { Config } from 'tailwindcss';
import preset from '@design-assets/tailwind-preset';
import { ICON_SIZE_SAFELIST } from '@design-assets/tailwind-preset/icon-sizes';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  presets: [preset],
  safelist: ICON_SIZE_SAFELIST,
} satisfies Config;
