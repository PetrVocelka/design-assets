// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/na component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { naFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/na.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagNAProps = AccessibleProps & {
  className?: string;
};

export function FlagNA({ className, ...a11y }: FlagNAProps) {
  return renderInline({ spec: naFlagInline, className, ...a11y });
}
