// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/qa component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { qaFlagInline } from '@design-assets/core/generated/inline/flags/qa.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagQAProps = AccessibleProps & {
  className?: string;
};

export function FlagQA({ className, ...a11y }: FlagQAProps) {
  return renderInline({ spec: qaFlagInline, className, ...a11y });
}
