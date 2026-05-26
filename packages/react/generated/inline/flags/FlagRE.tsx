// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/re component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { reFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/re.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagREProps = AccessibleProps & {
  className?: string;
};

export function FlagRE({ className, ...a11y }: FlagREProps) {
  return renderInline({ spec: reFlagInline, className, ...a11y });
}
