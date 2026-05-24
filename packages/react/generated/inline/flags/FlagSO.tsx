// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/so component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { soFlagInline } from '@design-assets/core/generated/inline/flags/so.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagSOProps = AccessibleProps & {
  className?: string;
};

export function FlagSO({ className, ...a11y }: FlagSOProps) {
  return renderInline({ spec: soFlagInline, className, ...a11y });
}
