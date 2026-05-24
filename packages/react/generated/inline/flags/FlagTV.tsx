// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/tv component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { tvFlagInline } from '@design-assets/core/generated/inline/flags/tv.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagTVProps = AccessibleProps & {
  className?: string;
};

export function FlagTV({ className, ...a11y }: FlagTVProps) {
  return renderInline({ spec: tvFlagInline, className, ...a11y });
}
