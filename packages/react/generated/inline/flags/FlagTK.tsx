// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/tk component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { tkFlagInline } from '@design-assets/core/generated/inline/flags/tk.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagTKProps = AccessibleProps & {
  className?: string;
};

export function FlagTK({ className, ...a11y }: FlagTKProps) {
  return renderInline({ spec: tkFlagInline, className, ...a11y });
}
