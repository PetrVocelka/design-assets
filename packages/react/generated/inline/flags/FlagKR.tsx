// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/kr component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { krFlagInline } from '@design-assets/core/generated/inline/flags/kr.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagKRProps = AccessibleProps & {
  className?: string;
};

export function FlagKR({ className, ...a11y }: FlagKRProps) {
  return renderInline({ spec: krFlagInline, className, ...a11y });
}
