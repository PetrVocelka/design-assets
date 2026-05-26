// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/in component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { inFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/in.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagINProps = AccessibleProps & {
  className?: string;
};

export function FlagIN({ className, ...a11y }: FlagINProps) {
  return renderInline({ spec: inFlagInline, className, ...a11y });
}
