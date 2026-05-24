// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/nl component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { nlFlagInline } from '@design-assets/core/generated/inline/flags/nl.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagNLProps = AccessibleProps & {
  className?: string;
};

export function FlagNL({ className, ...a11y }: FlagNLProps) {
  return renderInline({ spec: nlFlagInline, className, ...a11y });
}
