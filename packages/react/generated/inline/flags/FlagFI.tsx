// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/fi component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { fiFlagInline } from '@design-assets/core/generated/inline/flags/fi.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagFIProps = AccessibleProps & {
  className?: string;
};

export function FlagFI({ className, ...a11y }: FlagFIProps) {
  return renderInline({ spec: fiFlagInline, className, ...a11y });
}
