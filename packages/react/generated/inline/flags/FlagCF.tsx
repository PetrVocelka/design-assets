// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/cf component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { cfFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/cf.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagCFProps = AccessibleProps & {
  className?: string;
};

export function FlagCF({ className, ...a11y }: FlagCFProps) {
  return renderInline({ spec: cfFlagInline, className, ...a11y });
}
