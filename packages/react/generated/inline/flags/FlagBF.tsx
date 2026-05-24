// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/bf component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { bfFlagInline } from '@design-assets/core/generated/inline/flags/bf.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagBFProps = AccessibleProps & {
  className?: string;
};

export function FlagBF({ className, ...a11y }: FlagBFProps) {
  return renderInline({ spec: bfFlagInline, className, ...a11y });
}
