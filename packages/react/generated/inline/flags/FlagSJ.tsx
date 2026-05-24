// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/sj component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { sjFlagInline } from '@design-assets/core/generated/inline/flags/sj.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagSJProps = AccessibleProps & {
  className?: string;
};

export function FlagSJ({ className, ...a11y }: FlagSJProps) {
  return renderInline({ spec: sjFlagInline, className, ...a11y });
}
