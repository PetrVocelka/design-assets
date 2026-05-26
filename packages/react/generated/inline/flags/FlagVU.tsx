// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/vu component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { vuFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/vu.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagVUProps = AccessibleProps & {
  className?: string;
};

export function FlagVU({ className, ...a11y }: FlagVUProps) {
  return renderInline({ spec: vuFlagInline, className, ...a11y });
}
