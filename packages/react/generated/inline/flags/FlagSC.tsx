// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/sc component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { scFlagInline } from '@design-assets/core/generated/inline/flags/sc.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagSCProps = AccessibleProps & {
  className?: string;
};

export function FlagSC({ className, ...a11y }: FlagSCProps) {
  return renderInline({ spec: scFlagInline, className, ...a11y });
}
