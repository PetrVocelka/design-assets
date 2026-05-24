// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/lr component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { lrFlagInline } from '@design-assets/core/generated/inline/flags/lr.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagLRProps = AccessibleProps & {
  className?: string;
};

export function FlagLR({ className, ...a11y }: FlagLRProps) {
  return renderInline({ spec: lrFlagInline, className, ...a11y });
}
