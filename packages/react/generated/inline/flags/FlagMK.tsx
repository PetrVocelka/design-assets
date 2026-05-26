// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/mk component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { mkFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/mk.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagMKProps = AccessibleProps & {
  className?: string;
};

export function FlagMK({ className, ...a11y }: FlagMKProps) {
  return renderInline({ spec: mkFlagInline, className, ...a11y });
}
