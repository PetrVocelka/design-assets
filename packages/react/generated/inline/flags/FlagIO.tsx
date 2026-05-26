// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/io component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { ioFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/io.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagIOProps = AccessibleProps & {
  className?: string;
};

export function FlagIO({ className, ...a11y }: FlagIOProps) {
  return renderInline({ spec: ioFlagInline, className, ...a11y });
}
