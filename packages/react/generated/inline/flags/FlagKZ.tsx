// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/kz component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { kzFlagInline } from '@design-assets/core/generated/inline/flags/kz.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagKZProps = AccessibleProps & {
  className?: string;
};

export function FlagKZ({ className, ...a11y }: FlagKZProps) {
  return renderInline({ spec: kzFlagInline, className, ...a11y });
}
