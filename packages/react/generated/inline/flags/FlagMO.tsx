// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/mo component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { moFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/mo.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagMOProps = AccessibleProps & {
  className?: string;
};

export function FlagMO({ className, ...a11y }: FlagMOProps) {
  return renderInline({ spec: moFlagInline, className, ...a11y });
}
