// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/mx component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { mxFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/mx.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagMXProps = AccessibleProps & {
  className?: string;
};

export function FlagMX({ className, ...a11y }: FlagMXProps) {
  return renderInline({ spec: mxFlagInline, className, ...a11y });
}
