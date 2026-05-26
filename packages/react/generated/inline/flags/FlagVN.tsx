// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/vn component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { vnFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/vn.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagVNProps = AccessibleProps & {
  className?: string;
};

export function FlagVN({ className, ...a11y }: FlagVNProps) {
  return renderInline({ spec: vnFlagInline, className, ...a11y });
}
