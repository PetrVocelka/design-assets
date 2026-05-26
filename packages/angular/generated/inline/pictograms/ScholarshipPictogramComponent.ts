// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline pictograms/scholarship component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { scholarshipPictogramInline } from '../../../../core/generated/inline/pictograms/scholarship';
import { InlineAssetComponent } from '../inline-asset.component';

@Component({
  selector: 'design-asset-pictogram-scholarship',
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
export class ScholarshipPictogramComponent {
  readonly className = input<string>('', { alias: 'class' });
  readonly decorative = input<boolean | undefined>(undefined);
  readonly ariaLabel = input<string | undefined>(undefined);

  protected readonly spec = scholarshipPictogramInline;
}
