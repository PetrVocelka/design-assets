// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/au component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { auFlagInline } from '@design-assets/core/generated/inline/flags/au.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagAUProps = AccessibleProps & {
  className?: string;
};

export function FlagAU({ className, ...a11y }: FlagAUProps) {
  return renderInline({ spec: auFlagInline, className, ...a11y });
}
