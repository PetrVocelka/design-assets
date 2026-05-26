// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/jm component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { jmFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/jm.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagJMProps = AccessibleProps & {
  className?: string;
};

export function FlagJM({ className, ...a11y }: FlagJMProps) {
  return renderInline({ spec: jmFlagInline, className, ...a11y });
}
