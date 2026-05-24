// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/vi component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { viFlagInline } from '@design-assets/core/generated/inline/flags/vi.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagVIProps = AccessibleProps & {
  className?: string;
};

export function FlagVI({ className, ...a11y }: FlagVIProps) {
  return renderInline({ spec: viFlagInline, className, ...a11y });
}
