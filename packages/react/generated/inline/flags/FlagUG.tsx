// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ug component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { ugFlagInline } from '@design-assets/core/generated/inline/flags/ug.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagUGProps = AccessibleProps & {
  className?: string;
};

export function FlagUG({ className, ...a11y }: FlagUGProps) {
  return renderInline({ spec: ugFlagInline, className, ...a11y });
}
