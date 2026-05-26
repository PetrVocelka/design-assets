// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/hk component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { hkFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/hk.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagHKProps = AccessibleProps & {
  className?: string;
};

export function FlagHK({ className, ...a11y }: FlagHKProps) {
  return renderInline({ spec: hkFlagInline, className, ...a11y });
}
