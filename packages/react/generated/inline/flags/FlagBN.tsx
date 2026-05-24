// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/bn component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { bnFlagInline } from '@design-assets/core/generated/inline/flags/bn.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagBNProps = AccessibleProps & {
  className?: string;
};

export function FlagBN({ className, ...a11y }: FlagBNProps) {
  return renderInline({ spec: bnFlagInline, className, ...a11y });
}
