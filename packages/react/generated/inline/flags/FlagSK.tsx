// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/sk component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { skFlagInline } from '@design-assets/core/generated/inline/flags/sk.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagSKProps = AccessibleProps & {
  className?: string;
};

export function FlagSK({ className, ...a11y }: FlagSKProps) {
  return renderInline({ spec: skFlagInline, className, ...a11y });
}
