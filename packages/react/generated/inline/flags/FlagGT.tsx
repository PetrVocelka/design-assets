// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/gt component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { gtFlagInline } from '@design-assets/core/generated/inline/flags/gt.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagGTProps = AccessibleProps & {
  className?: string;
};

export function FlagGT({ className, ...a11y }: FlagGTProps) {
  return renderInline({ spec: gtFlagInline, className, ...a11y });
}
