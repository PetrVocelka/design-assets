// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/cx component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { cxFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/cx.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagCXProps = AccessibleProps & {
  className?: string;
};

export function FlagCX({ className, ...a11y }: FlagCXProps) {
  return renderInline({ spec: cxFlagInline, className, ...a11y });
}
