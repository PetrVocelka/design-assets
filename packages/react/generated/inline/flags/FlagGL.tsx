// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/gl component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { glFlagInline } from '@design-assets/core/generated/inline/flags/gl.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagGLProps = AccessibleProps & {
  className?: string;
};

export function FlagGL({ className, ...a11y }: FlagGLProps) {
  return renderInline({ spec: glFlagInline, className, ...a11y });
}
