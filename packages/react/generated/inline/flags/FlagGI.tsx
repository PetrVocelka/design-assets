// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/gi component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { giFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/gi.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagGIProps = AccessibleProps & {
  className?: string;
};

export function FlagGI({ className, ...a11y }: FlagGIProps) {
  return renderInline({ spec: giFlagInline, className, ...a11y });
}
