// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/sm component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { smFlagInline } from '@design-assets/core/generated/inline/flags/sm.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagSMProps = AccessibleProps & {
  className?: string;
};

export function FlagSM({ className, ...a11y }: FlagSMProps) {
  return renderInline({ spec: smFlagInline, className, ...a11y });
}
