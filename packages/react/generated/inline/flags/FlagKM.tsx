// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/km component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { kmFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/km.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagKMProps = AccessibleProps & {
  className?: string;
};

export function FlagKM({ className, ...a11y }: FlagKMProps) {
  return renderInline({ spec: kmFlagInline, className, ...a11y });
}
