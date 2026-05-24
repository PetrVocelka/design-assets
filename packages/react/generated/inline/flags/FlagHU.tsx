// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/hu component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { huFlagInline } from '@design-assets/core/generated/inline/flags/hu.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagHUProps = AccessibleProps & {
  className?: string;
};

export function FlagHU({ className, ...a11y }: FlagHUProps) {
  return renderInline({ spec: huFlagInline, className, ...a11y });
}
