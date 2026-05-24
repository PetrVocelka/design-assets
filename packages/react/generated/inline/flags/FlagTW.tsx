// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/tw component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { twFlagInline } from '@design-assets/core/generated/inline/flags/tw.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagTWProps = AccessibleProps & {
  className?: string;
};

export function FlagTW({ className, ...a11y }: FlagTWProps) {
  return renderInline({ spec: twFlagInline, className, ...a11y });
}
