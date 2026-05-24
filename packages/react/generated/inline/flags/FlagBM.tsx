// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/bm component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { bmFlagInline } from '@design-assets/core/generated/inline/flags/bm.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagBMProps = AccessibleProps & {
  className?: string;
};

export function FlagBM({ className, ...a11y }: FlagBMProps) {
  return renderInline({ spec: bmFlagInline, className, ...a11y });
}
