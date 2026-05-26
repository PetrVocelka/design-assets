// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/tr component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { trFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/tr.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagTRProps = AccessibleProps & {
  className?: string;
};

export function FlagTR({ className, ...a11y }: FlagTRProps) {
  return renderInline({ spec: trFlagInline, className, ...a11y });
}
