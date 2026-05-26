// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/gp component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { gpFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/gp.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagGPProps = AccessibleProps & {
  className?: string;
};

export function FlagGP({ className, ...a11y }: FlagGPProps) {
  return renderInline({ spec: gpFlagInline, className, ...a11y });
}
