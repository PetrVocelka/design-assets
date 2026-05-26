// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/hr component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { hrFlagInline } from '../../../../core/generated/inline/flags/hr';
import { InlineAssetComponent } from '../inline-asset.component';

@Component({
  selector: 'design-asset-flag-hr',
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
export class FlagHRComponent {
  readonly className = input<string>('', { alias: 'class' });
  readonly decorative = input<boolean | undefined>(undefined);
  readonly ariaLabel = input<string | undefined>(undefined);

  protected readonly spec = hrFlagInline;
}
