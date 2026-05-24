// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/mt component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { mtFlagInline } from '@design-assets/core/generated/inline/flags/mt.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagMTProps = AccessibleProps & {
  className?: string;
};

export function FlagMT({ className, ...a11y }: FlagMTProps) {
  return renderInline({ spec: mtFlagInline, className, ...a11y });
}
