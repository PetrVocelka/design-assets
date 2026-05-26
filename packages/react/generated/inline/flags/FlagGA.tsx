// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ga component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { gaFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/ga.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagGAProps = AccessibleProps & {
  className?: string;
};

export function FlagGA({ className, ...a11y }: FlagGAProps) {
  return renderInline({ spec: gaFlagInline, className, ...a11y });
}
