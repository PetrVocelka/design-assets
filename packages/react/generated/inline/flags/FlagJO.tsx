// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/jo component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { joFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/jo.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagJOProps = AccessibleProps & {
  className?: string;
};

export function FlagJO({ className, ...a11y }: FlagJOProps) {
  return renderInline({ spec: joFlagInline, className, ...a11y });
}
