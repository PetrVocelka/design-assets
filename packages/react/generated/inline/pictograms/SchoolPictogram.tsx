// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline pictograms/school component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { schoolPictogramInline } from '@design-assets/core/generated/inline/pictograms/school.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type SchoolPictogramProps = AccessibleProps & {
  className?: string;
};

export function SchoolPictogram({ className, ...a11y }: SchoolPictogramProps) {
  return renderInline({ spec: schoolPictogramInline, className, ...a11y });
}
