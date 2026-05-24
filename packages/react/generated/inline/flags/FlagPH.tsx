// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ph component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { phFlagInline } from '@design-assets/core/generated/inline/flags/ph.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagPHProps = AccessibleProps & {
  className?: string;
};

export function FlagPH({ className, ...a11y }: FlagPHProps) {
  return renderInline({ spec: phFlagInline, className, ...a11y });
}
