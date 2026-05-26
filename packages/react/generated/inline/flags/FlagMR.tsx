// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/mr component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { mrFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/mr.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagMRProps = AccessibleProps & {
  className?: string;
};

export function FlagMR({ className, ...a11y }: FlagMRProps) {
  return renderInline({ spec: mrFlagInline, className, ...a11y });
}
