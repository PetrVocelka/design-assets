// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ir component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { irFlagInline } from '@design-assets/core/generated/inline/flags/ir.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagIRProps = AccessibleProps & {
  className?: string;
};

export function FlagIR({ className, ...a11y }: FlagIRProps) {
  return renderInline({ spec: irFlagInline, className, ...a11y });
}
