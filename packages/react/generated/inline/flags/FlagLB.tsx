// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/lb component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { lbFlagInline } from '@design-assets/core/generated/inline/flags/lb.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagLBProps = AccessibleProps & {
  className?: string;
};

export function FlagLB({ className, ...a11y }: FlagLBProps) {
  return renderInline({ spec: lbFlagInline, className, ...a11y });
}
