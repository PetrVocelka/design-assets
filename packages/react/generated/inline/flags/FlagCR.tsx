// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/cr component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { crFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/cr.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagCRProps = AccessibleProps & {
  className?: string;
};

export function FlagCR({ className, ...a11y }: FlagCRProps) {
  return renderInline({ spec: crFlagInline, className, ...a11y });
}
