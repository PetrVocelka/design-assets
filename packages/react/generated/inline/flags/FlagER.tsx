// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/er component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { erFlagInline } from '@design-assets/core/generated/inline/flags/er.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagERProps = AccessibleProps & {
  className?: string;
};

export function FlagER({ className, ...a11y }: FlagERProps) {
  return renderInline({ spec: erFlagInline, className, ...a11y });
}
