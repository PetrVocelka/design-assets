// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/cm component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { cmFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/cm.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagCMProps = AccessibleProps & {
  className?: string;
};

export function FlagCM({ className, ...a11y }: FlagCMProps) {
  return renderInline({ spec: cmFlagInline, className, ...a11y });
}
