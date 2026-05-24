// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ai component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { aiFlagInline } from '@design-assets/core/generated/inline/flags/ai.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagAIProps = AccessibleProps & {
  className?: string;
};

export function FlagAI({ className, ...a11y }: FlagAIProps) {
  return renderInline({ spec: aiFlagInline, className, ...a11y });
}
