// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/kp component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { kpFlagInline } from '@design-assets/core/generated/inline/flags/kp.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagKPProps = AccessibleProps & {
  className?: string;
};

export function FlagKP({ className, ...a11y }: FlagKPProps) {
  return renderInline({ spec: kpFlagInline, className, ...a11y });
}
