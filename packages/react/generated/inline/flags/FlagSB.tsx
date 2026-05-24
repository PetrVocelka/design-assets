// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/sb component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { sbFlagInline } from '@design-assets/core/generated/inline/flags/sb.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagSBProps = AccessibleProps & {
  className?: string;
};

export function FlagSB({ className, ...a11y }: FlagSBProps) {
  return renderInline({ spec: sbFlagInline, className, ...a11y });
}
