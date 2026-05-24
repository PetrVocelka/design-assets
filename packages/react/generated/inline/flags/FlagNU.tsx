// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/nu component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { nuFlagInline } from '@design-assets/core/generated/inline/flags/nu.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagNUProps = AccessibleProps & {
  className?: string;
};

export function FlagNU({ className, ...a11y }: FlagNUProps) {
  return renderInline({ spec: nuFlagInline, className, ...a11y });
}
