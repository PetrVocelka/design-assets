// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ao component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { aoFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/ao.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagAOProps = AccessibleProps & {
  className?: string;
};

export function FlagAO({ className, ...a11y }: FlagAOProps) {
  return renderInline({ spec: aoFlagInline, className, ...a11y });
}
