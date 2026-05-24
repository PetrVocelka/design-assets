// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/at component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { atFlagInline } from '@design-assets/core/generated/inline/flags/at.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagATProps = AccessibleProps & {
  className?: string;
};

export function FlagAT({ className, ...a11y }: FlagATProps) {
  return renderInline({ spec: atFlagInline, className, ...a11y });
}
