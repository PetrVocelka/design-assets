// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/uz component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { uzFlagInline } from '@design-assets/core/generated/inline/flags/uz.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagUZProps = AccessibleProps & {
  className?: string;
};

export function FlagUZ({ className, ...a11y }: FlagUZProps) {
  return renderInline({ spec: uzFlagInline, className, ...a11y });
}
