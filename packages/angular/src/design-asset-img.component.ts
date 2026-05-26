import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import type { AssetCategory } from '@petrvocelka/design-assets-core/names';

import { DESIGN_ASSETS_CONFIG } from './design-assets-config';
import { resolveAssetImgSrc } from './asset-resolver';

@Component({
  selector: 'design-asset-img',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'className()' },
  template: `
    <img
      [src]="src()"
      [alt]="altText()"
      [attr.width]="width() ?? null"
      [attr.height]="height() ?? null"
      [attr.loading]="loading()"
      [attr.decoding]="decoding()"
    />
  `,
  styles: [`
    :host {
      line-height: 0;
    }

    :host > img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  `],
})
export class DesignAssetImgComponent {
  readonly category = input.required<AssetCategory>();
  readonly name = input.required<string>();
  readonly className = input<string>('', { alias: 'class' });
  readonly decorative = input<boolean | undefined>(undefined);
  readonly alt = input<string | undefined>(undefined);
  readonly baseUrl = input<string | undefined>(undefined);
  readonly versionTag = input<string | null | undefined>(undefined);
  readonly width = input<number | string | undefined>(undefined);
  readonly height = input<number | string | undefined>(undefined);
  readonly loading = input<'eager' | 'lazy'>('lazy');
  readonly decoding = input<'async' | 'auto' | 'sync'>('async');

  private readonly config = inject(DESIGN_ASSETS_CONFIG);

  protected readonly src = computed(() =>
    resolveAssetImgSrc(
      this.config,
      this.category(),
      this.name(),
      this.baseUrl(),
      this.versionTag(),
    ),
  );

  protected readonly altText = computed(() =>
    this.decorative() ? '' : (this.alt() ?? ''),
  );
}
