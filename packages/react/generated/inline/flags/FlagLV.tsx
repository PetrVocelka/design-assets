// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/lv component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { lvFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/lv.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagLVProps = AccessibleProps & {
  className?: string;
};

export function FlagLV({ className, ...a11y }: FlagLVProps) {
  return renderInline({ spec: lvFlagInline, className, ...a11y });
}
