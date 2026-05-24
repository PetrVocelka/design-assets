// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/pe component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { peFlagInline } from '@design-assets/core/generated/inline/flags/pe.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagPEProps = AccessibleProps & {
  className?: string;
};

export function FlagPE({ className, ...a11y }: FlagPEProps) {
  return renderInline({ spec: peFlagInline, className, ...a11y });
}
