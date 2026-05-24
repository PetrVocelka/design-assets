// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/gr component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { grFlagInline } from '@design-assets/core/generated/inline/flags/gr.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagGRProps = AccessibleProps & {
  className?: string;
};

export function FlagGR({ className, ...a11y }: FlagGRProps) {
  return renderInline({ spec: grFlagInline, className, ...a11y });
}
