// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/pg component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { pgFlagInline } from '@design-assets/core/generated/inline/flags/pg.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagPGProps = AccessibleProps & {
  className?: string;
};

export function FlagPG({ className, ...a11y }: FlagPGProps) {
  return renderInline({ spec: pgFlagInline, className, ...a11y });
}
