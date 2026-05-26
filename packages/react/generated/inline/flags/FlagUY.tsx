// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/uy component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { uyFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/uy.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagUYProps = AccessibleProps & {
  className?: string;
};

export function FlagUY({ className, ...a11y }: FlagUYProps) {
  return renderInline({ spec: uyFlagInline, className, ...a11y });
}
