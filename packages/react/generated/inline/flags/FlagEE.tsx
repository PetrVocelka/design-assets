// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ee component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { eeFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/ee.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagEEProps = AccessibleProps & {
  className?: string;
};

export function FlagEE({ className, ...a11y }: FlagEEProps) {
  return renderInline({ spec: eeFlagInline, className, ...a11y });
}
