// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/tz component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { tzFlagInline } from '@design-assets/core/generated/inline/flags/tz.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagTZProps = AccessibleProps & {
  className?: string;
};

export function FlagTZ({ className, ...a11y }: FlagTZProps) {
  return renderInline({ spec: tzFlagInline, className, ...a11y });
}
