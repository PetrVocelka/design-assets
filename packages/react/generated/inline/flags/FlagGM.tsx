// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/gm component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { gmFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/gm.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagGMProps = AccessibleProps & {
  className?: string;
};

export function FlagGM({ className, ...a11y }: FlagGMProps) {
  return renderInline({ spec: gmFlagInline, className, ...a11y });
}
