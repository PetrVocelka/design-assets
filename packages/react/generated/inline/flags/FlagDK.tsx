// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/dk component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { dkFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/dk.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagDKProps = AccessibleProps & {
  className?: string;
};

export function FlagDK({ className, ...a11y }: FlagDKProps) {
  return renderInline({ spec: dkFlagInline, className, ...a11y });
}
