// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/vg component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { vgFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/vg.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagVGProps = AccessibleProps & {
  className?: string;
};

export function FlagVG({ className, ...a11y }: FlagVGProps) {
  return renderInline({ spec: vgFlagInline, className, ...a11y });
}
