// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/gq component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { gqFlagInline } from '@design-assets/core/generated/inline/flags/gq.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagGQProps = AccessibleProps & {
  className?: string;
};

export function FlagGQ({ className, ...a11y }: FlagGQProps) {
  return renderInline({ spec: gqFlagInline, className, ...a11y });
}
