// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ec component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { ecFlagInline } from '@design-assets/core/generated/inline/flags/ec.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagECProps = AccessibleProps & {
  className?: string;
};

export function FlagEC({ className, ...a11y }: FlagECProps) {
  return renderInline({ spec: ecFlagInline, className, ...a11y });
}
