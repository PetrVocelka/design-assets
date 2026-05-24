// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ba component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { baFlagInline } from '@design-assets/core/generated/inline/flags/ba.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagBAProps = AccessibleProps & {
  className?: string;
};

export function FlagBA({ className, ...a11y }: FlagBAProps) {
  return renderInline({ spec: baFlagInline, className, ...a11y });
}
