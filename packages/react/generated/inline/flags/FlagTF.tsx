// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/tf component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { tfFlagInline } from '@petrvocelka/design-assets-core/generated/inline/flags/tf.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagTFProps = AccessibleProps & {
  className?: string;
};

export function FlagTF({ className, ...a11y }: FlagTFProps) {
  return renderInline({ spec: tfFlagInline, className, ...a11y });
}
