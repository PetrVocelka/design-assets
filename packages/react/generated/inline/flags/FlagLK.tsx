// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/lk component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { lkFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/lk.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagLKProps = AccessibleProps & {
  className?: string;
};

export function FlagLK({ className, ...a11y }: FlagLKProps) {
  return renderInline({ spec: lkFlagInline, className, ...a11y });
}
