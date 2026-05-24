// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/bj component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { bjFlagInline } from '@design-assets/core/generated/inline/flags/bj.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagBJProps = AccessibleProps & {
  className?: string;
};

export function FlagBJ({ className, ...a11y }: FlagBJProps) {
  return renderInline({ spec: bjFlagInline, className, ...a11y });
}
