// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/am component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { amFlagInline } from '@design-assets/core/generated/inline/flags/am.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagAMProps = AccessibleProps & {
  className?: string;
};

export function FlagAM({ className, ...a11y }: FlagAMProps) {
  return renderInline({ spec: amFlagInline, className, ...a11y });
}
