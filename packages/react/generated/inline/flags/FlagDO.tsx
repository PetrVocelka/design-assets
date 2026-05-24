// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/do component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { doFlagInline } from '@design-assets/core/generated/inline/flags/do.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagDOProps = AccessibleProps & {
  className?: string;
};

export function FlagDO({ className, ...a11y }: FlagDOProps) {
  return renderInline({ spec: doFlagInline, className, ...a11y });
}
