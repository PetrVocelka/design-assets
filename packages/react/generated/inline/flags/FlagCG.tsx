// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/cg component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { cgFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/cg.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagCGProps = AccessibleProps & {
  className?: string;
};

export function FlagCG({ className, ...a11y }: FlagCGProps) {
  return renderInline({ spec: cgFlagInline, className, ...a11y });
}
