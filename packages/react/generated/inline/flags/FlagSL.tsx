// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/sl component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { slFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/sl.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagSLProps = AccessibleProps & {
  className?: string;
};

export function FlagSL({ className, ...a11y }: FlagSLProps) {
  return renderInline({ spec: slFlagInline, className, ...a11y });
}
