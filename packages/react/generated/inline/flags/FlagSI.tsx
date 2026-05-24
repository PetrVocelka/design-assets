// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/si component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { siFlagInline } from '@design-assets/core/generated/inline/flags/si.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagSIProps = AccessibleProps & {
  className?: string;
};

export function FlagSI({ className, ...a11y }: FlagSIProps) {
  return renderInline({ spec: siFlagInline, className, ...a11y });
}
