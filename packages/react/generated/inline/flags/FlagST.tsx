// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/st component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { stFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/st.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagSTProps = AccessibleProps & {
  className?: string;
};

export function FlagST({ className, ...a11y }: FlagSTProps) {
  return renderInline({ spec: stFlagInline, className, ...a11y });
}
