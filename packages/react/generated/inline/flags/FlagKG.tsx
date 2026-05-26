// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/kg component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { kgFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/kg.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagKGProps = AccessibleProps & {
  className?: string;
};

export function FlagKG({ className, ...a11y }: FlagKGProps) {
  return renderInline({ spec: kgFlagInline, className, ...a11y });
}
