// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/sd component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { sdFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/sd.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagSDProps = AccessibleProps & {
  className?: string;
};

export function FlagSD({ className, ...a11y }: FlagSDProps) {
  return renderInline({ spec: sdFlagInline, className, ...a11y });
}
