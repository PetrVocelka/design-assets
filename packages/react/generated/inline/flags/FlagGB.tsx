// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/gb component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { gbFlagInline } from '@design-assets/core/generated/inline/flags/gb.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagGBProps = AccessibleProps & {
  className?: string;
};

export function FlagGB({ className, ...a11y }: FlagGBProps) {
  return renderInline({ spec: gbFlagInline, className, ...a11y });
}
