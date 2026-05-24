/**
 * Example icon size scale for docs / Storybook controls only.
 * Not part of @design-assets/core — teams define their own sizing rules.
 *
 * Uses explicit h-* w-* + shrink-0 + inline-block (reliable in Tailwind JIT;
 * dynamic size-* strings can fail, especially xs).
 */
const ICON_LAYOUT = 'shrink-0 inline-block';

export const ICON_SIZE_PRESETS = {
  xs: { className: `h-3 w-3 ${ICON_LAYOUT}`, pixels: 12, token: 'h-3 w-3' },
  sm: { className: `h-4 w-4 ${ICON_LAYOUT}`, pixels: 16, token: 'h-4 w-4' },
  md: { className: `h-5 w-5 ${ICON_LAYOUT}`, pixels: 20, token: 'h-5 w-5' },
  lg: { className: `h-6 w-6 ${ICON_LAYOUT}`, pixels: 24, token: 'h-6 w-6' },
  xl: { className: `h-8 w-8 ${ICON_LAYOUT}`, pixels: 32, token: 'h-8 w-8' },
} as const;

export type IconSizePreset = keyof typeof ICON_SIZE_PRESETS;

/** Safelist entries for Tailwind — keeps icon sizes when classes are composed at runtime. */
export const ICON_SIZE_SAFELIST = [
  ...Object.values(ICON_SIZE_PRESETS).flatMap((preset) => preset.className.split(' ')),
  'shrink-0',
  'inline-block',
];
