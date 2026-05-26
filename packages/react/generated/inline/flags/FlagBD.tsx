// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/bd component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { bdFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/bd.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagBDProps = AccessibleProps & {
  className?: string;
};

export function FlagBD({ className, ...a11y }: FlagBDProps) {
  return renderInline({ spec: bdFlagInline, className, ...a11y });
}
