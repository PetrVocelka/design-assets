// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/aq component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { aqFlagInline } from '@design-assets/core/generated/inline/flags/aq.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagAQProps = AccessibleProps & {
  className?: string;
};

export function FlagAQ({ className, ...a11y }: FlagAQProps) {
  return renderInline({ spec: aqFlagInline, className, ...a11y });
}
