// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ni component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { niFlagInline } from '@design-assets/core/generated/inline/flags/ni.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagNIProps = AccessibleProps & {
  className?: string;
};

export function FlagNI({ className, ...a11y }: FlagNIProps) {
  return renderInline({ spec: niFlagInline, className, ...a11y });
}
