// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/hm component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { hmFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/hm.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagHMProps = AccessibleProps & {
  className?: string;
};

export function FlagHM({ className, ...a11y }: FlagHMProps) {
  return renderInline({ spec: hmFlagInline, className, ...a11y });
}
