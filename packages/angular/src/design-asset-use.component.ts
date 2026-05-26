import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import type { AssetCategory } from '@petrvocelka/design-assets-core/names';

import { resolveA11yInputs } from './a11y';
import { DESIGN_ASSETS_CONFIG } from './design-assets-config';
import {
  resolveAssetUseHref,
  resolveAssetViewBox,
} from './asset-resolver';

@Component({
  selector: 'design-asset-use',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'className()' },
  template: `
    <svg
      [attr.viewBox]="viewBox()"
      [attr.aria-hidden]="a11y().ariaHidden === true ? true : null"
      [attr.role]="a11y().role ?? null"
      [attr.aria-label]="a11y().ariaLabel ?? null"
      focusable="false"
    >
      <use [attr.href]="href()" [attr.xlink:href]="href()" />
    </svg>
  `,
  styles: [`
    :host {
      line-height: 0;
    }

    :host > svg {
      display: block;
      width: 100%;
      height: auto;
    }
  `],
})
export class DesignAssetUseComponent {
  readonly category = input.required<AssetCategory>();
  readonly name = input.required<string>();
  readonly className = input<string>('', { alias: 'class' });
  readonly decorative = input<boolean | undefined>(undefined);
  readonly ariaLabel = input<string | undefined>(undefined);
  readonly baseUrl = input<string | undefined>(undefined);
  readonly versionTag = input<string | null | undefined>(undefined);

  private readonly config = inject(DESIGN_ASSETS_CONFIG);

  protected readonly viewBox = computed(() =>
    resolveAssetViewBox(this.category()),
  );

  protected readonly href = computed(() =>
    resolveAssetUseHref(
      this.config,
      this.category(),
      this.name(),
      this.baseUrl(),
      this.versionTag(),
    ),
  );

  protected readonly a11y = computed(() =>
    resolveA11yInputs(this.decorative(), this.ariaLabel()),
  );
}
