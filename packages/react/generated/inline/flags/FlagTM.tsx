// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/tm component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { tmFlagInline } from '@design-assets/core/generated/inline/flags/tm.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagTMProps = AccessibleProps & {
  className?: string;
};

export function FlagTM({ className, ...a11y }: FlagTMProps) {
  return renderInline({ spec: tmFlagInline, className, ...a11y });
}
