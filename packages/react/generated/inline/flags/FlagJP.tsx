// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/jp component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { jpFlagInline } from '@design-assets/core/generated/inline/flags/jp.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagJPProps = AccessibleProps & {
  className?: string;
};

export function FlagJP({ className, ...a11y }: FlagJPProps) {
  return renderInline({ spec: jpFlagInline, className, ...a11y });
}
