// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/cl component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { clFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/cl.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagCLProps = AccessibleProps & {
  className?: string;
};

export function FlagCL({ className, ...a11y }: FlagCLProps) {
  return renderInline({ spec: clFlagInline, className, ...a11y });
}
