// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ar component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { arFlagInline } from '@design-assets/core/generated/inline/flags/ar.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagARProps = AccessibleProps & {
  className?: string;
};

export function FlagAR({ className, ...a11y }: FlagARProps) {
  return renderInline({ spec: arFlagInline, className, ...a11y });
}
