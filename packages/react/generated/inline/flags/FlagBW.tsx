// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/bw component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { bwFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/bw.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagBWProps = AccessibleProps & {
  className?: string;
};

export function FlagBW({ className, ...a11y }: FlagBWProps) {
  return renderInline({ spec: bwFlagInline, className, ...a11y });
}
