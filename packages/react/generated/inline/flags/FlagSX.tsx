// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/sx component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { sxFlagInline } from '@design-assets/core/generated/inline/flags/sx.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagSXProps = AccessibleProps & {
  className?: string;
};

export function FlagSX({ className, ...a11y }: FlagSXProps) {
  return renderInline({ spec: sxFlagInline, className, ...a11y });
}
