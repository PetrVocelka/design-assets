// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ke component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { keFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/ke.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagKEProps = AccessibleProps & {
  className?: string;
};

export function FlagKE({ className, ...a11y }: FlagKEProps) {
  return renderInline({ spec: keFlagInline, className, ...a11y });
}
