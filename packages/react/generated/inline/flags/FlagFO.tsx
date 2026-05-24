// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/fo component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { foFlagInline } from '@design-assets/core/generated/inline/flags/fo.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagFOProps = AccessibleProps & {
  className?: string;
};

export function FlagFO({ className, ...a11y }: FlagFOProps) {
  return renderInline({ spec: foFlagInline, className, ...a11y });
}
