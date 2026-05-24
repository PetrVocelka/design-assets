// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ae component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { aeFlagInline } from '@design-assets/core/generated/inline/flags/ae.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagAEProps = AccessibleProps & {
  className?: string;
};

export function FlagAE({ className, ...a11y }: FlagAEProps) {
  return renderInline({ spec: aeFlagInline, className, ...a11y });
}
