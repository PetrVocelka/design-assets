// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/gd component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { gdFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/gd.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagGDProps = AccessibleProps & {
  className?: string;
};

export function FlagGD({ className, ...a11y }: FlagGDProps) {
  return renderInline({ spec: gdFlagInline, className, ...a11y });
}
