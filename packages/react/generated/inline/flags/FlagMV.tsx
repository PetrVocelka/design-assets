// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/mv component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { mvFlagInline } from '@design-assets/core/generated/inline/flags/mv.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagMVProps = AccessibleProps & {
  className?: string;
};

export function FlagMV({ className, ...a11y }: FlagMVProps) {
  return renderInline({ spec: mvFlagInline, className, ...a11y });
}
