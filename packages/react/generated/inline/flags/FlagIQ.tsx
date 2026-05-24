// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/iq component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { iqFlagInline } from '@design-assets/core/generated/inline/flags/iq.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagIQProps = AccessibleProps & {
  className?: string;
};

export function FlagIQ({ className, ...a11y }: FlagIQProps) {
  return renderInline({ spec: iqFlagInline, className, ...a11y });
}
