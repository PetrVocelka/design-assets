// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline pictograms/excel-table component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { excelTablePictogramInline } from '@design-assets/core/generated/inline/pictograms/excel-table.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type ExcelTablePictogramProps = AccessibleProps & {
  className?: string;
};

export function ExcelTablePictogram({ className, ...a11y }: ExcelTablePictogramProps) {
  return renderInline({ spec: excelTablePictogramInline, className, ...a11y });
}
