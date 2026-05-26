// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline icons/diamond component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { diamondIconInline } from '@petrvocelka/design-assets-core/generated/inline/icons/diamond.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type DiamondIconProps = AccessibleProps & {
  className?: string;
};

export function DiamondIcon({ className, ...a11y }: DiamondIconProps) {
  return renderInline({ spec: diamondIconInline, className, ...a11y });
}
