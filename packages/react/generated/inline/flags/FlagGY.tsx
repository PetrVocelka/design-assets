// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/gy component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { gyFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/gy.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagGYProps = AccessibleProps & {
  className?: string;
};

export function FlagGY({ className, ...a11y }: FlagGYProps) {
  return renderInline({ spec: gyFlagInline, className, ...a11y });
}
