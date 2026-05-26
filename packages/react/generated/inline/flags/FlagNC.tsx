// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/nc component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { ncFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/nc.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagNCProps = AccessibleProps & {
  className?: string;
};

export function FlagNC({ className, ...a11y }: FlagNCProps) {
  return renderInline({ spec: ncFlagInline, className, ...a11y });
}
