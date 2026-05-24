// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/tg component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { tgFlagInline } from '@design-assets/core/generated/inline/flags/tg.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagTGProps = AccessibleProps & {
  className?: string;
};

export function FlagTG({ className, ...a11y }: FlagTGProps) {
  return renderInline({ spec: tgFlagInline, className, ...a11y });
}
