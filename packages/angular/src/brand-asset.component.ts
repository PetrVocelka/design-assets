import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import type { BrandAssetName } from '@petrvocelka/design-assets-core/names';

import { resolveA11yInputs } from './a11y';
import {
  DESIGN_ASSETS_CONFIG,
} from './design-assets-config';
import { resolveAssetUseHref, resolveAssetViewBox } from './asset-resolver';

@Component({
  selector: 'design-asset-brand',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      [attr.viewBox]="viewBox()"
      [class]="className()"
      [attr.aria-hidden]="a11y().ariaHidden === true ? true : null"
      [attr.role]="a11y().role ?? null"
      [attr.aria-label]="a11y().ariaLabel ?? null"
      focusable="false"
    >
      <use [attr.href]="href()" />
    </svg>
  `,
})
export class BrandAssetComponent {
  readonly name = input.required<BrandAssetName>();
  readonly className = input<string>('', { alias: 'class' });
  readonly decorative = input<boolean | undefined>(undefined);
  readonly ariaLabel = input<string | undefined>(undefined);
  readonly baseUrl = input<string | undefined>(undefined);
  readonly versionTag = input<string | null | undefined>(undefined);

  private readonly config = inject(DESIGN_ASSETS_CONFIG);

  protected readonly viewBox = computed(
    () => resolveAssetViewBox('brand'),
  );

  protected readonly href = computed(() =>
    resolveAssetUseHref(
      this.config,
      'brand',
      this.name(),
      this.baseUrl(),
      this.versionTag(),
    ),
  );

  protected readonly a11y = computed(() =>
    resolveA11yInputs(this.decorative(), this.ariaLabel()),
  );
}
