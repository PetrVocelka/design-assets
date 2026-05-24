// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/us component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { usFlagInline } from '@design-assets/core/generated/inline/flags/us.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagUSProps = AccessibleProps & {
  className?: string;
};

export function FlagUS({ className, ...a11y }: FlagUSProps) {
  return renderInline({ spec: usFlagInline, className, ...a11y });
}
