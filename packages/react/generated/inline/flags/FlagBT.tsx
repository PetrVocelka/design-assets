// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/bt component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { btFlagInline } from '@design-assets/core/generated/inline/flags/bt.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagBTProps = AccessibleProps & {
  className?: string;
};

export function FlagBT({ className, ...a11y }: FlagBTProps) {
  return renderInline({ spec: btFlagInline, className, ...a11y });
}
