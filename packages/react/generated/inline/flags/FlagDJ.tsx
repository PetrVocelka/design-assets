// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/dj component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { djFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/dj.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagDJProps = AccessibleProps & {
  className?: string;
};

export function FlagDJ({ className, ...a11y }: FlagDJProps) {
  return renderInline({ spec: djFlagInline, className, ...a11y });
}
