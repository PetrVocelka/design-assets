// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/nz component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { nzFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/nz.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagNZProps = AccessibleProps & {
  className?: string;
};

export function FlagNZ({ className, ...a11y }: FlagNZProps) {
  return renderInline({ spec: nzFlagInline, className, ...a11y });
}
