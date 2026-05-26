// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/mz component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { mzFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/mz.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagMZProps = AccessibleProps & {
  className?: string;
};

export function FlagMZ({ className, ...a11y }: FlagMZProps) {
  return renderInline({ spec: mzFlagInline, className, ...a11y });
}
