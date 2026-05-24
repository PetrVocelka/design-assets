// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ps component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { psFlagInline } from '@design-assets/core/generated/inline/flags/ps.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagPSProps = AccessibleProps & {
  className?: string;
};

export function FlagPS({ className, ...a11y }: FlagPSProps) {
  return renderInline({ spec: psFlagInline, className, ...a11y });
}
