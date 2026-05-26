// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ag component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { agFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/ag.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagAGProps = AccessibleProps & {
  className?: string;
};

export function FlagAG({ className, ...a11y }: FlagAGProps) {
  return renderInline({ spec: agFlagInline, className, ...a11y });
}
