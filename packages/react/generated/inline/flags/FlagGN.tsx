// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/gn component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { gnFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/gn.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagGNProps = AccessibleProps & {
  className?: string;
};

export function FlagGN({ className, ...a11y }: FlagGNProps) {
  return renderInline({ spec: gnFlagInline, className, ...a11y });
}
