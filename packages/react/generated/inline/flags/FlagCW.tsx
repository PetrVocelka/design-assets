// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/cw component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { cwFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/cw.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagCWProps = AccessibleProps & {
  className?: string;
};

export function FlagCW({ className, ...a11y }: FlagCWProps) {
  return renderInline({ spec: cwFlagInline, className, ...a11y });
}
