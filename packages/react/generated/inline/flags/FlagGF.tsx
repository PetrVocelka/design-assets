// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/gf component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { gfFlagInline } from '@design-assets/core/generated/inline/flags/gf.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagGFProps = AccessibleProps & {
  className?: string;
};

export function FlagGF({ className, ...a11y }: FlagGFProps) {
  return renderInline({ spec: gfFlagInline, className, ...a11y });
}
