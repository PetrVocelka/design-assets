// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline pictograms/grade-chart component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { gradeChartPictogramInline } from '../../../../core/generated/inline/pictograms/grade-chart';
import { InlineAssetComponent } from '../inline-asset.component';

@Component({
  selector: 'da-ng-grade-chart',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [InlineAssetComponent],
  template: `
    <da-ng-inline-asset
      [spec]="spec"
      [class]="className()"
      [decorative]="decorative()"
      [ariaLabel]="ariaLabel()"
    />
  `,
})
export class GradeChartPictogramComponent {
  readonly className = input<string>('', { alias: 'class' });
  readonly decorative = input<boolean | undefined>(undefined);
  readonly ariaLabel = input<string | undefined>(undefined);

  protected readonly spec = gradeChartPictogramInline;
}
