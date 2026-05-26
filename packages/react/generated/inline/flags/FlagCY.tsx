// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/cy component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { cyFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/cy.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagCYProps = AccessibleProps & {
  className?: string;
};

export function FlagCY({ className, ...a11y }: FlagCYProps) {
  return renderInline({ spec: cyFlagInline, className, ...a11y });
}
