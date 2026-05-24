// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/bi component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { biFlagInline } from '@design-assets/core/generated/inline/flags/bi.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagBIProps = AccessibleProps & {
  className?: string;
};

export function FlagBI({ className, ...a11y }: FlagBIProps) {
  return renderInline({ spec: biFlagInline, className, ...a11y });
}
