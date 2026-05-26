// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/zw component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { zwFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/zw.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagZWProps = AccessibleProps & {
  className?: string;
};

export function FlagZW({ className, ...a11y }: FlagZWProps) {
  return renderInline({ spec: zwFlagInline, className, ...a11y });
}
