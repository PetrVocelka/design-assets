// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline illustrations/offline component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { offlineIllustrationInline } from '@design-assets/core/generated/inline/illustrations/offline.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type OfflineIllustrationProps = AccessibleProps & {
  className?: string;
};

export function OfflineIllustration({ className, ...a11y }: OfflineIllustrationProps) {
  return renderInline({ spec: offlineIllustrationInline, className, ...a11y });
}
