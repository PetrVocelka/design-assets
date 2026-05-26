// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline pictograms/grade-chart component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { gradeChartPictogramInline } from '@petrvocelka/design-assets-core/generated/inline/pictograms/grade-chart.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type GradeChartPictogramProps = AccessibleProps & {
  className?: string;
};

export function GradeChartPictogram({ className, ...a11y }: GradeChartPictogramProps) {
  return renderInline({ spec: gradeChartPictogramInline, className, ...a11y });
}
