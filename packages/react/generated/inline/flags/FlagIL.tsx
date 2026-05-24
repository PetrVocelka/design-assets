// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/il component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { ilFlagInline } from '@design-assets/core/generated/inline/flags/il.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagILProps = AccessibleProps & {
  className?: string;
};

export function FlagIL({ className, ...a11y }: FlagILProps) {
  return renderInline({ spec: ilFlagInline, className, ...a11y });
}
