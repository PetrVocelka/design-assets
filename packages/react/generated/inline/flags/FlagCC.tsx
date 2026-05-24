// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/cc component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { ccFlagInline } from '@design-assets/core/generated/inline/flags/cc.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagCCProps = AccessibleProps & {
  className?: string;
};

export function FlagCC({ className, ...a11y }: FlagCCProps) {
  return renderInline({ spec: ccFlagInline, className, ...a11y });
}
