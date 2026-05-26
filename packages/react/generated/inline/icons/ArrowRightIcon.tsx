// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline icons/arrow-right component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { arrowRightIconInline } from '@petrvocelka/design-assets-core/generated/inline/icons/arrow-right.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type ArrowRightIconProps = AccessibleProps & {
  className?: string;
};

export function ArrowRightIcon({ className, ...a11y }: ArrowRightIconProps) {
  return renderInline({ spec: arrowRightIconInline, className, ...a11y });
}
