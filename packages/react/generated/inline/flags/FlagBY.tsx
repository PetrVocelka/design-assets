// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/by component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { byFlagInline } from '@design-assets/core/generated/inline/flags/by.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagBYProps = AccessibleProps & {
  className?: string;
};

export function FlagBY({ className, ...a11y }: FlagBYProps) {
  return renderInline({ spec: byFlagInline, className, ...a11y });
}
