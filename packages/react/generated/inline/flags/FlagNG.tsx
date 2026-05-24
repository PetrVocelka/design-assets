// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ng component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { ngFlagInline } from '@design-assets/core/generated/inline/flags/ng.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagNGProps = AccessibleProps & {
  className?: string;
};

export function FlagNG({ className, ...a11y }: FlagNGProps) {
  return renderInline({ spec: ngFlagInline, className, ...a11y });
}
