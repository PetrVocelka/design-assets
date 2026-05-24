// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ro component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { roFlagInline } from '@design-assets/core/generated/inline/flags/ro.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagROProps = AccessibleProps & {
  className?: string;
};

export function FlagRO({ className, ...a11y }: FlagROProps) {
  return renderInline({ spec: roFlagInline, className, ...a11y });
}
