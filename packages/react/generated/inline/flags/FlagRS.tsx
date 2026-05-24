// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/rs component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { rsFlagInline } from '@design-assets/core/generated/inline/flags/rs.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagRSProps = AccessibleProps & {
  className?: string;
};

export function FlagRS({ className, ...a11y }: FlagRSProps) {
  return renderInline({ spec: rsFlagInline, className, ...a11y });
}
