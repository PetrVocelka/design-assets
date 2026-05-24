// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ge component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { geFlagInline } from '@design-assets/core/generated/inline/flags/ge.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagGEProps = AccessibleProps & {
  className?: string;
};

export function FlagGE({ className, ...a11y }: FlagGEProps) {
  return renderInline({ spec: geFlagInline, className, ...a11y });
}
