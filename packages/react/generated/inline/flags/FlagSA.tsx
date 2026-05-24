// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/sa component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { saFlagInline } from '@design-assets/core/generated/inline/flags/sa.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagSAProps = AccessibleProps & {
  className?: string;
};

export function FlagSA({ className, ...a11y }: FlagSAProps) {
  return renderInline({ spec: saFlagInline, className, ...a11y });
}
