// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/um component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { umFlagInline } from '@design-assets/core/generated/inline/flags/um.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagUMProps = AccessibleProps & {
  className?: string;
};

export function FlagUM({ className, ...a11y }: FlagUMProps) {
  return renderInline({ spec: umFlagInline, className, ...a11y });
}
