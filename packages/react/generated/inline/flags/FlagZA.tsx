// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/za component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { zaFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/za.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagZAProps = AccessibleProps & {
  className?: string;
};

export function FlagZA({ className, ...a11y }: FlagZAProps) {
  return renderInline({ spec: zaFlagInline, className, ...a11y });
}
