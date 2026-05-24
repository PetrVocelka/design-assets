// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/th component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { thFlagInline } from '@design-assets/core/generated/inline/flags/th.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagTHProps = AccessibleProps & {
  className?: string;
};

export function FlagTH({ className, ...a11y }: FlagTHProps) {
  return renderInline({ spec: thFlagInline, className, ...a11y });
}
