// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/py component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { pyFlagInline } from '@design-assets/core/generated/inline/flags/py.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagPYProps = AccessibleProps & {
  className?: string;
};

export function FlagPY({ className, ...a11y }: FlagPYProps) {
  return renderInline({ spec: pyFlagInline, className, ...a11y });
}
