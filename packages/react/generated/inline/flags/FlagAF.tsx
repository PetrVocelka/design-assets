// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/af component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { afFlagInline } from '@design-assets/core/generated/inline/flags/af.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagAFProps = AccessibleProps & {
  className?: string;
};

export function FlagAF({ className, ...a11y }: FlagAFProps) {
  return renderInline({ spec: afFlagInline, className, ...a11y });
}
