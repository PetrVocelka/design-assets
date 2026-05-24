// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/vc component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { vcFlagInline } from '@design-assets/core/generated/inline/flags/vc.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagVCProps = AccessibleProps & {
  className?: string;
};

export function FlagVC({ className, ...a11y }: FlagVCProps) {
  return renderInline({ spec: vcFlagInline, className, ...a11y });
}
