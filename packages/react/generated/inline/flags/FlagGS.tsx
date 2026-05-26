// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/gs component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { gsFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/gs.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagGSProps = AccessibleProps & {
  className?: string;
};

export function FlagGS({ className, ...a11y }: FlagGSProps) {
  return renderInline({ spec: gsFlagInline, className, ...a11y });
}
