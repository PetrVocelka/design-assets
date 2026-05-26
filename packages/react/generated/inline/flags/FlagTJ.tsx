// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/tj component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { tjFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/tj.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagTJProps = AccessibleProps & {
  className?: string;
};

export function FlagTJ({ className, ...a11y }: FlagTJProps) {
  return renderInline({ spec: tjFlagInline, className, ...a11y });
}
