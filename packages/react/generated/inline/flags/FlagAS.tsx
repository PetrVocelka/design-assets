// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/as component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { asFlagInline } from '@design-assets/core/generated/inline/flags/as.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagASProps = AccessibleProps & {
  className?: string;
};

export function FlagAS({ className, ...a11y }: FlagASProps) {
  return renderInline({ spec: asFlagInline, className, ...a11y });
}
