// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ye component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { yeFlagInline } from '@design-assets/core/generated/inline/flags/ye.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagYEProps = AccessibleProps & {
  className?: string;
};

export function FlagYE({ className, ...a11y }: FlagYEProps) {
  return renderInline({ spec: yeFlagInline, className, ...a11y });
}
