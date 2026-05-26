// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/mc component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { mcFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/mc.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagMCProps = AccessibleProps & {
  className?: string;
};

export function FlagMC({ className, ...a11y }: FlagMCProps) {
  return renderInline({ spec: mcFlagInline, className, ...a11y });
}
