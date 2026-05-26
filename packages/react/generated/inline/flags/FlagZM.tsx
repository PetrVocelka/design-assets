// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/zm component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { zmFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/zm.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagZMProps = AccessibleProps & {
  className?: string;
};

export function FlagZM({ className, ...a11y }: FlagZMProps) {
  return renderInline({ spec: zmFlagInline, className, ...a11y });
}
