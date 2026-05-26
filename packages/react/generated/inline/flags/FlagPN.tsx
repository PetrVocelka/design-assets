// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/pn component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { pnFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/pn.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagPNProps = AccessibleProps & {
  className?: string;
};

export function FlagPN({ className, ...a11y }: FlagPNProps) {
  return renderInline({ spec: pnFlagInline, className, ...a11y });
}
