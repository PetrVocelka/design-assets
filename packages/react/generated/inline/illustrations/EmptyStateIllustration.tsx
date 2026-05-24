// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline illustrations/empty-state component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { emptyStateIllustrationInline } from '@design-assets/core/generated/inline/illustrations/empty-state.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type EmptyStateIllustrationProps = AccessibleProps & {
  className?: string;
};

export function EmptyStateIllustration({ className, ...a11y }: EmptyStateIllustrationProps) {
  return renderInline({ spec: emptyStateIllustrationInline, className, ...a11y });
}
