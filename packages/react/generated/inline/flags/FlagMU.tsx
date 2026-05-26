// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/mu component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { muFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/mu.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagMUProps = AccessibleProps & {
  className?: string;
};

export function FlagMU({ className, ...a11y }: FlagMUProps) {
  return renderInline({ spec: muFlagInline, className, ...a11y });
}
