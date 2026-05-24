// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/pr component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { prFlagInline } from '@design-assets/core/generated/inline/flags/pr.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagPRProps = AccessibleProps & {
  className?: string;
};

export function FlagPR({ className, ...a11y }: FlagPRProps) {
  return renderInline({ spec: prFlagInline, className, ...a11y });
}
