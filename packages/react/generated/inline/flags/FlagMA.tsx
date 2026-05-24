// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ma component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { maFlagInline } from '@design-assets/core/generated/inline/flags/ma.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagMAProps = AccessibleProps & {
  className?: string;
};

export function FlagMA({ className, ...a11y }: FlagMAProps) {
  return renderInline({ spec: maFlagInline, className, ...a11y });
}
