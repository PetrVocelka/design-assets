// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline illustrations/offline component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { offlineIllustrationInline } from '../../../../core/generated/inline/illustrations/offline';
import { InlineAssetComponent } from '../inline-asset.component';

@Component({
  selector: 'design-asset-illustration-offline',
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
export class OfflineIllustrationComponent {
  readonly className = input<string>('', { alias: 'class' });
  readonly decorative = input<boolean | undefined>(undefined);
  readonly ariaLabel = input<string | undefined>(undefined);

  protected readonly spec = offlineIllustrationInline;
}
