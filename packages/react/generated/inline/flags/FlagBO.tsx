// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/bo component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { boFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/bo.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagBOProps = AccessibleProps & {
  className?: string;
};

export function FlagBO({ className, ...a11y }: FlagBOProps) {
  return renderInline({ spec: boFlagInline, className, ...a11y });
}
