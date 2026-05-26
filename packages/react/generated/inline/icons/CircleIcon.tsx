// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline icons/circle component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { circleIconInline } from '@petrvocelka/design-assets-core/generated/inline/icons/circle.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type CircleIconProps = AccessibleProps & {
  className?: string;
};

export function CircleIcon({ className, ...a11y }: CircleIconProps) {
  return renderInline({ spec: circleIconInline, className, ...a11y });
}
