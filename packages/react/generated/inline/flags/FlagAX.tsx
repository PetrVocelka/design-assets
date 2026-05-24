// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ax component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { axFlagInline } from '@design-assets/core/generated/inline/flags/ax.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagAXProps = AccessibleProps & {
  className?: string;
};

export function FlagAX({ className, ...a11y }: FlagAXProps) {
  return renderInline({ spec: axFlagInline, className, ...a11y });
}
