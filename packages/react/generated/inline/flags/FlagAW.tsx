// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/aw component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { awFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/aw.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagAWProps = AccessibleProps & {
  className?: string;
};

export function FlagAW({ className, ...a11y }: FlagAWProps) {
  return renderInline({ spec: awFlagInline, className, ...a11y });
}
