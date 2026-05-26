// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline pictograms/excel-table component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { excelTablePictogramInline } from '../../../../core/generated/inline/pictograms/excel-table';
import { InlineAssetComponent } from '../inline-asset.component';

@Component({
  selector: 'design-asset-pictogram-excel-table',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [InlineAssetComponent],
  template: `
    <design-asset-inline
      [spec]="spec"
      [class]="className()"
      [decorative]="decorative()"
      [ariaLabel]="ariaLabel()"
    />
  `,
})
export class ExcelTablePictogramComponent {
  readonly className = input<string>('', { alias: 'class' });
  readonly decorative = input<boolean | undefined>(undefined);
  readonly ariaLabel = input<string | undefined>(undefined);

  protected readonly spec = excelTablePictogramInline;
}
