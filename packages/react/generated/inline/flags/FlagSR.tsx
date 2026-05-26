// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/sr component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { srFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/sr.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagSRProps = AccessibleProps & {
  className?: string;
};

export function FlagSR({ className, ...a11y }: FlagSRProps) {
  return renderInline({ spec: srFlagInline, className, ...a11y });
}
