// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/pm component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { pmFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/pm.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagPMProps = AccessibleProps & {
  className?: string;
};

export function FlagPM({ className, ...a11y }: FlagPMProps) {
  return renderInline({ spec: pmFlagInline, className, ...a11y });
}
