// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/fk component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { fkFlagInline } from '@design-assets/core/generated/inline/flags/fk.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagFKProps = AccessibleProps & {
  className?: string;
};

export function FlagFK({ className, ...a11y }: FlagFKProps) {
  return renderInline({ spec: fkFlagInline, className, ...a11y });
}
