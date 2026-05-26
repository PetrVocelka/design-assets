// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/np component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { npFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/np.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagNPProps = AccessibleProps & {
  className?: string;
};

export function FlagNP({ className, ...a11y }: FlagNPProps) {
  return renderInline({ spec: npFlagInline, className, ...a11y });
}
