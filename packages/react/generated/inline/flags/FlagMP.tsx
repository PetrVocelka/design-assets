// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/mp component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { mpFlagInline } from '@design-assets/core/generated/inline/flags/mp.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagMPProps = AccessibleProps & {
  className?: string;
};

export function FlagMP({ className, ...a11y }: FlagMPProps) {
  return renderInline({ spec: mpFlagInline, className, ...a11y });
}
