// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/nr component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { nrFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/nr.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagNRProps = AccessibleProps & {
  className?: string;
};

export function FlagNR({ className, ...a11y }: FlagNRProps) {
  return renderInline({ spec: nrFlagInline, className, ...a11y });
}
