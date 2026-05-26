// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/to component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { toFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/to.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagTOProps = AccessibleProps & {
  className?: string;
};

export function FlagTO({ className, ...a11y }: FlagTOProps) {
  return renderInline({ spec: toFlagInline, className, ...a11y });
}
