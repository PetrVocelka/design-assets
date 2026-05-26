// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/cv component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { cvFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/cv.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagCVProps = AccessibleProps & {
  className?: string;
};

export function FlagCV({ className, ...a11y }: FlagCVProps) {
  return renderInline({ spec: cvFlagInline, className, ...a11y });
}
