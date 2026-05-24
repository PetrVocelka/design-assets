// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/no component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { noFlagInline } from '@design-assets/core/generated/inline/flags/no.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagNOProps = AccessibleProps & {
  className?: string;
};

export function FlagNO({ className, ...a11y }: FlagNOProps) {
  return renderInline({ spec: noFlagInline, className, ...a11y });
}
