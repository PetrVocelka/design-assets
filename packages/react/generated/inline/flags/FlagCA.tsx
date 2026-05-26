// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ca component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { caFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/ca.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagCAProps = AccessibleProps & {
  className?: string;
};

export function FlagCA({ className, ...a11y }: FlagCAProps) {
  return renderInline({ spec: caFlagInline, className, ...a11y });
}
