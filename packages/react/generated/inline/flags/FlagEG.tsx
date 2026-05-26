// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/eg component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { egFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/eg.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagEGProps = AccessibleProps & {
  className?: string;
};

export function FlagEG({ className, ...a11y }: FlagEGProps) {
  return renderInline({ spec: egFlagInline, className, ...a11y });
}
