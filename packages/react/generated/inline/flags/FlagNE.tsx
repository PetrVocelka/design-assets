// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ne component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { neFlagInline } from '@design-assets/core/generated/inline/flags/ne.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagNEProps = AccessibleProps & {
  className?: string;
};

export function FlagNE({ className, ...a11y }: FlagNEProps) {
  return renderInline({ spec: neFlagInline, className, ...a11y });
}
