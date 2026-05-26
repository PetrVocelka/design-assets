// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline icons/square component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { squareIconInline } from '@petrvocelka/design-assets-core/generated/inline/icons/square.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type SquareIconProps = AccessibleProps & {
  className?: string;
};

export function SquareIcon({ className, ...a11y }: SquareIconProps) {
  return renderInline({ spec: squareIconInline, className, ...a11y });
}
