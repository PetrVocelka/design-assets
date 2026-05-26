// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/co component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { coFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/co.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagCOProps = AccessibleProps & {
  className?: string;
};

export function FlagCO({ className, ...a11y }: FlagCOProps) {
  return renderInline({ spec: coFlagInline, className, ...a11y });
}
