// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ms component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { msFlagInline } from '@design-assets/core/generated/inline/flags/ms.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagMSProps = AccessibleProps & {
  className?: string;
};

export function FlagMS({ className, ...a11y }: FlagMSProps) {
  return renderInline({ spec: msFlagInline, className, ...a11y });
}
