import { createElement, type ComponentType } from 'react';
import { manifest } from '@design-assets/core';

export function manifestNames(category: string): string[] {
  return Object.values(manifest)
    .filter((entry) => entry.category === category)
    .map((entry) => entry.name);
}

export const a11yArgTypes = {
  decorative: {
    description: 'Marks the asset as decorative (`aria-hidden`). Default when omitted.',
    control: 'boolean' as const,
  },
  ariaLabel: {
    description: 'Accessible name when the asset carries meaning on its own.',
    control: { type: 'text' as const },
    if: { arg: 'decorative', eq: false },
  },
};

export const a11yArgs = {
  decorative: true,
  ariaLabel: 'Settings',
};

export type SizePresetEntry = {
  className: string;
  pixels: number;
  token: string;
};

export const PICTOGRAM_SIZE_PRESETS = {
  sm: { className: 'size-8', pixels: 32, token: 'size-8' },
  md: { className: 'size-12', pixels: 48, token: 'size-12' },
  lg: { className: 'size-16', pixels: 64, token: 'size-16' },
  xl: { className: 'size-24', pixels: 96, token: 'size-24' },
} as const satisfies Record<string, SizePresetEntry>;

export const ILLUSTRATION_SIZE_PRESETS = {
  sm: { className: 'h-24 w-auto', pixels: 96, token: 'h-24 w-auto' },
  md: { className: 'h-32 w-auto', pixels: 128, token: 'h-32 w-auto' },
  lg: { className: 'h-40 w-auto', pixels: 160, token: 'h-40 w-auto' },
  xl: { className: 'h-48 w-auto', pixels: 192, token: 'h-48 w-auto' },
} as const satisfies Record<string, SizePresetEntry>;

export const BRAND_SIZE_PRESETS = {
  sm: { className: 'h-8 w-auto', pixels: 32, token: 'h-8 w-auto' },
  md: { className: 'h-12 w-auto', pixels: 48, token: 'h-12 w-auto' },
  lg: { className: 'h-16 w-auto', pixels: 64, token: 'h-16 w-auto' },
  xl: { className: 'h-24 w-auto', pixels: 96, token: 'h-24 w-auto' },
} as const satisfies Record<string, SizePresetEntry>;

export const FLAG_SIZE_PRESETS = {
  sm: { className: 'h-4 w-6', pixels: 16, token: 'h-4 w-6' },
  md: { className: 'h-6 w-9', pixels: 24, token: 'h-6 w-9' },
  lg: { className: 'h-8 w-12', pixels: 32, token: 'h-8 w-12' },
  xl: { className: 'h-12 w-16', pixels: 48, token: 'h-12 w-16' },
} as const satisfies Record<string, SizePresetEntry>;

export function sizePresetArgType(presets: Record<string, SizePresetEntry>) {
  return {
    size: {
      name: 'Example size',
      description:
        'Documentation-only class applied via `className`; consumers own their sizing system.',
      control: { type: 'select' as const },
      options: Object.keys(presets),
    },
    className: { table: { disable: true } },
  };
}

export function storyRenderWithSize<P extends { className?: string }, K extends string>(
  Component: ComponentType<P>,
  presets: Record<K, SizePresetEntry>,
  defaultSize: K,
) {
  return (args: P & { size?: K }) => {
    const { size = defaultSize, ...rest } = args;
    const className = presets[size]?.className;
    return createElement(Component, { ...(rest as P), className });
  };
}
