// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/mh component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { mhFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/mh.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagMHProps = AccessibleProps & {
  className?: string;
};

export function FlagMH({ className, ...a11y }: FlagMHProps) {
  return renderInline({ spec: mhFlagInline, className, ...a11y });
}
