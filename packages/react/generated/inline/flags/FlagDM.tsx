// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/dm component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { dmFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/dm.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagDMProps = AccessibleProps & {
  className?: string;
};

export function FlagDM({ className, ...a11y }: FlagDMProps) {
  return renderInline({ spec: dmFlagInline, className, ...a11y });
}
