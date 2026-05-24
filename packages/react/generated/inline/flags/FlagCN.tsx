// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/cn component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { cnFlagInline } from '@design-assets/core/generated/inline/flags/cn.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagCNProps = AccessibleProps & {
  className?: string;
};

export function FlagCN({ className, ...a11y }: FlagCNProps) {
  return renderInline({ spec: cnFlagInline, className, ...a11y });
}
