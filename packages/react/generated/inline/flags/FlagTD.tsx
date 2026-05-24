// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/td component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { tdFlagInline } from '@design-assets/core/generated/inline/flags/td.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagTDProps = AccessibleProps & {
  className?: string;
};

export function FlagTD({ className, ...a11y }: FlagTDProps) {
  return renderInline({ spec: tdFlagInline, className, ...a11y });
}
