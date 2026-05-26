// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/ki component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { kiFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/ki.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagKIProps = AccessibleProps & {
  className?: string;
};

export function FlagKI({ className, ...a11y }: FlagKIProps) {
  return renderInline({ spec: kiFlagInline, className, ...a11y });
}
