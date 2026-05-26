// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/gg component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { ggFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/gg.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagGGProps = AccessibleProps & {
  className?: string;
};

export function FlagGG({ className, ...a11y }: FlagGGProps) {
  return renderInline({ spec: ggFlagInline, className, ...a11y });
}
