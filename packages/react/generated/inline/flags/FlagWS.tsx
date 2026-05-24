// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ws component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { wsFlagInline } from '@design-assets/core/generated/inline/flags/ws.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagWSProps = AccessibleProps & {
  className?: string;
};

export function FlagWS({ className, ...a11y }: FlagWSProps) {
  return renderInline({ spec: wsFlagInline, className, ...a11y });
}
