// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/my component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { myFlagInline } from '@design-assets/core/generated/inline/flags/my.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagMYProps = AccessibleProps & {
  className?: string;
};

export function FlagMY({ className, ...a11y }: FlagMYProps) {
  return renderInline({ spec: myFlagInline, className, ...a11y });
}
