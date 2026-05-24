// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/mw component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { mwFlagInline } from '@design-assets/core/generated/inline/flags/mw.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagMWProps = AccessibleProps & {
  className?: string;
};

export function FlagMW({ className, ...a11y }: FlagMWProps) {
  return renderInline({ spec: mwFlagInline, className, ...a11y });
}
