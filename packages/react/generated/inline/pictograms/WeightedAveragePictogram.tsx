// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline pictograms/weighted-average component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { weightedAveragePictogramInline } from '@petrvocelka/design-assets-core/generated/inline/pictograms/weighted-average.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type WeightedAveragePictogramProps = AccessibleProps & {
  className?: string;
};

export function WeightedAveragePictogram({ className, ...a11y }: WeightedAveragePictogramProps) {
  return renderInline({ spec: weightedAveragePictogramInline, className, ...a11y });
}
