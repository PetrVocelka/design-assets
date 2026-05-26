// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/tl component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { tlFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/tl.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagTLProps = AccessibleProps & {
  className?: string;
};

export function FlagTL({ className, ...a11y }: FlagTLProps) {
  return renderInline({ spec: tlFlagInline, className, ...a11y });
}
