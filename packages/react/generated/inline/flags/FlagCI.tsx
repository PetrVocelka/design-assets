// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ci component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { ciFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/ci.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagCIProps = AccessibleProps & {
  className?: string;
};

export function FlagCI({ className, ...a11y }: FlagCIProps) {
  return renderInline({ spec: ciFlagInline, className, ...a11y });
}
