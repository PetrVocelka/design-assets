// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline icons/triangle component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { triangleIconInline } from '@petrvocelka/design-assets-core/generated/inline/icons/triangle.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type TriangleIconProps = AccessibleProps & {
  className?: string;
};

export function TriangleIcon({ className, ...a11y }: TriangleIconProps) {
  return renderInline({ spec: triangleIconInline, className, ...a11y });
}
