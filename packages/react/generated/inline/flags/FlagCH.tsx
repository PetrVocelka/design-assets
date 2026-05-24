// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ch component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { chFlagInline } from '@design-assets/core/generated/inline/flags/ch.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagCHProps = AccessibleProps & {
  className?: string;
};

export function FlagCH({ className, ...a11y }: FlagCHProps) {
  return renderInline({ spec: chFlagInline, className, ...a11y });
}
