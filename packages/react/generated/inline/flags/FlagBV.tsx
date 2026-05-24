// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/bv component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { bvFlagInline } from '@design-assets/core/generated/inline/flags/bv.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagBVProps = AccessibleProps & {
  className?: string;
};

export function FlagBV({ className, ...a11y }: FlagBVProps) {
  return renderInline({ spec: bvFlagInline, className, ...a11y });
}
