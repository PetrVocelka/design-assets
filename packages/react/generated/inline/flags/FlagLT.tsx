// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/lt component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { ltFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/lt.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagLTProps = AccessibleProps & {
  className?: string;
};

export function FlagLT({ className, ...a11y }: FlagLTProps) {
  return renderInline({ spec: ltFlagInline, className, ...a11y });
}
