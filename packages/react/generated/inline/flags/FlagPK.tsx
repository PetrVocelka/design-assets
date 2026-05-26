// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/pk component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { pkFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/pk.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagPKProps = AccessibleProps & {
  className?: string;
};

export function FlagPK({ className, ...a11y }: FlagPKProps) {
  return renderInline({ spec: pkFlagInline, className, ...a11y });
}
