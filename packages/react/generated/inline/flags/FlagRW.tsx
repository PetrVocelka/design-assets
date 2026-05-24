// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/rw component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { rwFlagInline } from '@design-assets/core/generated/inline/flags/rw.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagRWProps = AccessibleProps & {
  className?: string;
};

export function FlagRW({ className, ...a11y }: FlagRWProps) {
  return renderInline({ spec: rwFlagInline, className, ...a11y });
}
