// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/sh component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { shFlagInline } from '@design-assets/core/generated/inline/flags/sh.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagSHProps = AccessibleProps & {
  className?: string;
};

export function FlagSH({ className, ...a11y }: FlagSHProps) {
  return renderInline({ spec: shFlagInline, className, ...a11y });
}
