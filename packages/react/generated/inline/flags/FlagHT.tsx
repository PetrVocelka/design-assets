// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ht component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { htFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/ht.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagHTProps = AccessibleProps & {
  className?: string;
};

export function FlagHT({ className, ...a11y }: FlagHTProps) {
  return renderInline({ spec: htFlagInline, className, ...a11y });
}
