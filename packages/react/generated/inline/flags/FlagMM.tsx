// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/mm component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { mmFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/mm.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagMMProps = AccessibleProps & {
  className?: string;
};

export function FlagMM({ className, ...a11y }: FlagMMProps) {
  return renderInline({ spec: mmFlagInline, className, ...a11y });
}
