// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/lc component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { lcFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/lc.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagLCProps = AccessibleProps & {
  className?: string;
};

export function FlagLC({ className, ...a11y }: FlagLCProps) {
  return renderInline({ spec: lcFlagInline, className, ...a11y });
}
