// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/pf component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { pfFlagInline } from '@design-assets/core/generated/inline/flags/pf.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagPFProps = AccessibleProps & {
  className?: string;
};

export function FlagPF({ className, ...a11y }: FlagPFProps) {
  return renderInline({ spec: pfFlagInline, className, ...a11y });
}
