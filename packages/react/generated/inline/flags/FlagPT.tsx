// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/pt component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { ptFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/pt.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagPTProps = AccessibleProps & {
  className?: string;
};

export function FlagPT({ className, ...a11y }: FlagPTProps) {
  return renderInline({ spec: ptFlagInline, className, ...a11y });
}
