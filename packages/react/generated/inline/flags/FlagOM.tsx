// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/om component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { omFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/om.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagOMProps = AccessibleProps & {
  className?: string;
};

export function FlagOM({ className, ...a11y }: FlagOMProps) {
  return renderInline({ spec: omFlagInline, className, ...a11y });
}
