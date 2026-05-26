// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/az component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { azFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/az.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagAZProps = AccessibleProps & {
  className?: string;
};

export function FlagAZ({ className, ...a11y }: FlagAZProps) {
  return renderInline({ spec: azFlagInline, className, ...a11y });
}
