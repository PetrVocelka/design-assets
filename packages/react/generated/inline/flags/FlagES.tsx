// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/es component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { esFlagInline } from '@design-assets/core/generated/inline/flags/es.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagESProps = AccessibleProps & {
  className?: string;
};

export function FlagES({ className, ...a11y }: FlagESProps) {
  return renderInline({ spec: esFlagInline, className, ...a11y });
}
