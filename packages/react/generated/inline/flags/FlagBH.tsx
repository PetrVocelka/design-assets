// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/bh component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { bhFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/bh.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagBHProps = AccessibleProps & {
  className?: string;
};

export function FlagBH({ className, ...a11y }: FlagBHProps) {
  return renderInline({ spec: bhFlagInline, className, ...a11y });
}
