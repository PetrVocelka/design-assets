// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/mn component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { mnFlagInline } from '@design-assets/core/generated/inline/flags/mn.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagMNProps = AccessibleProps & {
  className?: string;
};

export function FlagMN({ className, ...a11y }: FlagMNProps) {
  return renderInline({ spec: mnFlagInline, className, ...a11y });
}
