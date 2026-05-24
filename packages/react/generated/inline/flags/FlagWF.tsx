// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/wf component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { wfFlagInline } from '@design-assets/core/generated/inline/flags/wf.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagWFProps = AccessibleProps & {
  className?: string;
};

export function FlagWF({ className, ...a11y }: FlagWFProps) {
  return renderInline({ spec: wfFlagInline, className, ...a11y });
}
