// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/sg component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { sgFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/sg.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagSGProps = AccessibleProps & {
  className?: string;
};

export function FlagSG({ className, ...a11y }: FlagSGProps) {
  return renderInline({ spec: sgFlagInline, className, ...a11y });
}
