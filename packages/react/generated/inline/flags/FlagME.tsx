// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/me component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { meFlagInline } from '@design-assets/core/generated/inline/flags/me.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagMEProps = AccessibleProps & {
  className?: string;
};

export function FlagME({ className, ...a11y }: FlagMEProps) {
  return renderInline({ spec: meFlagInline, className, ...a11y });
}
