// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/it component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { itFlagInline } from '@design-assets/core/generated/inline/flags/it.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagITProps = AccessibleProps & {
  className?: string;
};

export function FlagIT({ className, ...a11y }: FlagITProps) {
  return renderInline({ spec: itFlagInline, className, ...a11y });
}
