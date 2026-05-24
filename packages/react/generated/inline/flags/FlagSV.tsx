// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/sv component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { svFlagInline } from '@design-assets/core/generated/inline/flags/sv.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagSVProps = AccessibleProps & {
  className?: string;
};

export function FlagSV({ className, ...a11y }: FlagSVProps) {
  return renderInline({ spec: svFlagInline, className, ...a11y });
}
