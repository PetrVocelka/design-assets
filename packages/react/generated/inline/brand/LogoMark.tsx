// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline brand/logo-mark component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { logoMarkBrandInline } from '@petrvocelka/design-assets-core/generated/inline/brand/logo-mark.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type LogoMarkProps = AccessibleProps & {
  className?: string;
};

export function LogoMark({ className, ...a11y }: LogoMarkProps) {
  return renderInline({ spec: logoMarkBrandInline, className, ...a11y });
}
