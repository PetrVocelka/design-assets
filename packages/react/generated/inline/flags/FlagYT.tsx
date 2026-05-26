// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/yt component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { ytFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/yt.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagYTProps = AccessibleProps & {
  className?: string;
};

export function FlagYT({ className, ...a11y }: FlagYTProps) {
  return renderInline({ spec: ytFlagInline, className, ...a11y });
}
