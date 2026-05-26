// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/pl component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { plFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/pl.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagPLProps = AccessibleProps & {
  className?: string;
};

export function FlagPL({ className, ...a11y }: FlagPLProps) {
  return renderInline({ spec: plFlagInline, className, ...a11y });
}
