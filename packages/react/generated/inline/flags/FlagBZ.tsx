// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/bz component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { bzFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/bz.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagBZProps = AccessibleProps & {
  className?: string;
};

export function FlagBZ({ className, ...a11y }: FlagBZProps) {
  return renderInline({ spec: bzFlagInline, className, ...a11y });
}
