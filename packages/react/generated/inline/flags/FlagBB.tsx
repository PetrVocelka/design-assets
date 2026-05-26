// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/bb component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { bbFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/bb.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagBBProps = AccessibleProps & {
  className?: string;
};

export function FlagBB({ className, ...a11y }: FlagBBProps) {
  return renderInline({ spec: bbFlagInline, className, ...a11y });
}
