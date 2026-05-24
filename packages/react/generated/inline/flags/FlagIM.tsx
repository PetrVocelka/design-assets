// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/im component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { imFlagInline } from '@design-assets/core/generated/inline/flags/im.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagIMProps = AccessibleProps & {
  className?: string;
};

export function FlagIM({ className, ...a11y }: FlagIMProps) {
  return renderInline({ spec: imFlagInline, className, ...a11y });
}
