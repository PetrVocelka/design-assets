// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ss component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { ssFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/ss.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagSSProps = AccessibleProps & {
  className?: string;
};

export function FlagSS({ className, ...a11y }: FlagSSProps) {
  return renderInline({ spec: ssFlagInline, className, ...a11y });
}
