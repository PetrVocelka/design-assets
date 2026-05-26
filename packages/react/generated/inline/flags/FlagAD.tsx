// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ad component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { adFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/ad.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagADProps = AccessibleProps & {
  className?: string;
};

export function FlagAD({ className, ...a11y }: FlagADProps) {
  return renderInline({ spec: adFlagInline, className, ...a11y });
}
