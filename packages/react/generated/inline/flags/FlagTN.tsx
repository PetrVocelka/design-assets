// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/tn component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { tnFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/tn.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagTNProps = AccessibleProps & {
  className?: string;
};

export function FlagTN({ className, ...a11y }: FlagTNProps) {
  return renderInline({ spec: tnFlagInline, className, ...a11y });
}
