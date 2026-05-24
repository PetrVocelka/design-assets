// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ie component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { ieFlagInline } from '@design-assets/core/generated/inline/flags/ie.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagIEProps = AccessibleProps & {
  className?: string;
};

export function FlagIE({ className, ...a11y }: FlagIEProps) {
  return renderInline({ spec: ieFlagInline, className, ...a11y });
}
