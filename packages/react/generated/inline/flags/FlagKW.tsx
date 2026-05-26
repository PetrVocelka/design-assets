// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/kw component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { kwFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/kw.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagKWProps = AccessibleProps & {
  className?: string;
};

export function FlagKW({ className, ...a11y }: FlagKWProps) {
  return renderInline({ spec: kwFlagInline, className, ...a11y });
}
