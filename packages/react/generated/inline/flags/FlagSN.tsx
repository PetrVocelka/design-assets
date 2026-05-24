// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/sn component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { snFlagInline } from '@design-assets/core/generated/inline/flags/sn.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagSNProps = AccessibleProps & {
  className?: string;
};

export function FlagSN({ className, ...a11y }: FlagSNProps) {
  return renderInline({ spec: snFlagInline, className, ...a11y });
}
