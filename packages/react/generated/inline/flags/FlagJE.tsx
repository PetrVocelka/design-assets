// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/je component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { jeFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/je.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagJEProps = AccessibleProps & {
  className?: string;
};

export function FlagJE({ className, ...a11y }: FlagJEProps) {
  return renderInline({ spec: jeFlagInline, className, ...a11y });
}
