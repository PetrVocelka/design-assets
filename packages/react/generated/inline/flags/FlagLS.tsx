// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ls component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { lsFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/ls.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagLSProps = AccessibleProps & {
  className?: string;
};

export function FlagLS({ className, ...a11y }: FlagLSProps) {
  return renderInline({ spec: lsFlagInline, className, ...a11y });
}
