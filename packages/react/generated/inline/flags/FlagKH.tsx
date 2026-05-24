// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/kh component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { khFlagInline } from '@design-assets/core/generated/inline/flags/kh.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagKHProps = AccessibleProps & {
  className?: string;
};

export function FlagKH({ className, ...a11y }: FlagKHProps) {
  return renderInline({ spec: khFlagInline, className, ...a11y });
}
