// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ly component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { lyFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/ly.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagLYProps = AccessibleProps & {
  className?: string;
};

export function FlagLY({ className, ...a11y }: FlagLYProps) {
  return renderInline({ spec: lyFlagInline, className, ...a11y });
}
