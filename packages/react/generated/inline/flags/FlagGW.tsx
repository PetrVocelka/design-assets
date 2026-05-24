// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/gw component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { gwFlagInline } from '@design-assets/core/generated/inline/flags/gw.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagGWProps = AccessibleProps & {
  className?: string;
};

export function FlagGW({ className, ...a11y }: FlagGWProps) {
  return renderInline({ spec: gwFlagInline, className, ...a11y });
}
