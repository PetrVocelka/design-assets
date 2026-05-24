// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ua component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { uaFlagInline } from '@design-assets/core/generated/inline/flags/ua.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagUAProps = AccessibleProps & {
  className?: string;
};

export function FlagUA({ className, ...a11y }: FlagUAProps) {
  return renderInline({ spec: uaFlagInline, className, ...a11y });
}
