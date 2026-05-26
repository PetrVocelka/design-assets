// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/et component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { etFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/et.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagETProps = AccessibleProps & {
  className?: string;
};

export function FlagET({ className, ...a11y }: FlagETProps) {
  return renderInline({ spec: etFlagInline, className, ...a11y });
}
