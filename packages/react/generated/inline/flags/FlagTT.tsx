// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/tt component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { ttFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/tt.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagTTProps = AccessibleProps & {
  className?: string;
};

export function FlagTT({ className, ...a11y }: FlagTTProps) {
  return renderInline({ spec: ttFlagInline, className, ...a11y });
}
