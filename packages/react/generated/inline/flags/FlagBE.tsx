// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/be component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { beFlagInline } from '@design-assets/core/generated/inline/flags/be.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagBEProps = AccessibleProps & {
  className?: string;
};

export function FlagBE({ className, ...a11y }: FlagBEProps) {
  return renderInline({ spec: beFlagInline, className, ...a11y });
}
