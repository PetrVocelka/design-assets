// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/la component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { laFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/la.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagLAProps = AccessibleProps & {
  className?: string;
};

export function FlagLA({ className, ...a11y }: FlagLAProps) {
  return renderInline({ spec: laFlagInline, className, ...a11y });
}
