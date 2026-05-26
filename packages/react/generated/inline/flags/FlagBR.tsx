// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/br component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { brFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/br.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagBRProps = AccessibleProps & {
  className?: string;
};

export function FlagBR({ className, ...a11y }: FlagBRProps) {
  return renderInline({ spec: brFlagInline, className, ...a11y });
}
