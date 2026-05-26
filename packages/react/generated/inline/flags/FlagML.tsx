// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ml component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { mlFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/ml.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagMLProps = AccessibleProps & {
  className?: string;
};

export function FlagML({ className, ...a11y }: FlagMLProps) {
  return renderInline({ spec: mlFlagInline, className, ...a11y });
}
