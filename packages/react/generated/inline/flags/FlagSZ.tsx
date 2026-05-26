// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/sz component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { szFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/sz.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagSZProps = AccessibleProps & {
  className?: string;
};

export function FlagSZ({ className, ...a11y }: FlagSZProps) {
  return renderInline({ spec: szFlagInline, className, ...a11y });
}
