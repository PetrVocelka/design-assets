// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/gh component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { ghFlagInline } from '@design-assets/core/generated/inline/flags/gh.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagGHProps = AccessibleProps & {
  className?: string;
};

export function FlagGH({ className, ...a11y }: FlagGHProps) {
  return renderInline({ spec: ghFlagInline, className, ...a11y });
}
