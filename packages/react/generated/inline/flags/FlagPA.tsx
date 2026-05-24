// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/pa component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { paFlagInline } from '@design-assets/core/generated/inline/flags/pa.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagPAProps = AccessibleProps & {
  className?: string;
};

export function FlagPA({ className, ...a11y }: FlagPAProps) {
  return renderInline({ spec: paFlagInline, className, ...a11y });
}
