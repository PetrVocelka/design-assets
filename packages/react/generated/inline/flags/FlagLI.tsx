// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/li component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { liFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/li.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagLIProps = AccessibleProps & {
  className?: string;
};

export function FlagLI({ className, ...a11y }: FlagLIProps) {
  return renderInline({ spec: liFlagInline, className, ...a11y });
}
