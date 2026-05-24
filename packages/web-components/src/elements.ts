import { property } from 'lit/decorators.js';
import {
  getBrandAssetHref,
  getFlagHref,
  getIconHref,
  getIllustrationHref,
  getPictogramHref,
  manifest,
  resolveAssetHref,
  type AssetHrefResolver,
  type BrandAssetName,
  type CountryCode,
  type IconName,
  type IllustrationName,
  type PictogramName,
} from '@design-assets/core';

import { ExternalAssetElement } from './external-asset-element.js';

export class DaIconElement extends ExternalAssetElement {
  @property({ type: String }) name: IconName = 'square';

  protected assetHref(
    baseUrl: string,
    versionTag: string | null | undefined,
    resolveHref: AssetHrefResolver | undefined,
  ): string {
    const defaultHref = getIconHref(this.name, baseUrl, versionTag);
    return resolveAssetHref(
      {
        category: 'icons',
        name: this.name,
        baseUrl,
        versionTag,
        defaultHref,
      },
      resolveHref,
    );
  }

  protected defaultViewBox(): string {
    return manifest[`icons/${this.name}`]?.viewBox ?? '0 0 24 24';
  }
}

export class DaPictogramElement extends ExternalAssetElement {
  @property({ type: String }) name: PictogramName = 'school';

  protected assetHref(
    baseUrl: string,
    versionTag: string | null | undefined,
    resolveHref: AssetHrefResolver | undefined,
  ): string {
    const defaultHref = getPictogramHref(this.name, baseUrl, versionTag);
    return resolveAssetHref(
      {
        category: 'pictograms',
        name: this.name,
        baseUrl,
        versionTag,
        defaultHref,
      },
      resolveHref,
    );
  }

  protected defaultViewBox(): string {
    return manifest[`pictograms/${this.name}`]?.viewBox ?? '0 0 48 48';
  }
}

export class DaIllustrationElement extends ExternalAssetElement {
  @property({ type: String }) name: IllustrationName = 'empty-state';

  protected assetHref(
    baseUrl: string,
    versionTag: string | null | undefined,
    resolveHref: AssetHrefResolver | undefined,
  ): string {
    const defaultHref = getIllustrationHref(this.name, baseUrl, versionTag);
    return resolveAssetHref(
      {
        category: 'illustrations',
        name: this.name,
        baseUrl,
        versionTag,
        defaultHref,
      },
      resolveHref,
    );
  }

  protected defaultViewBox(): string {
    return manifest[`illustrations/${this.name}`]?.viewBox ?? '0 0 240 160';
  }
}

export class DaBrandAssetElement extends ExternalAssetElement {
  @property({ type: String }) name: BrandAssetName = 'logo-mark';

  protected assetHref(
    baseUrl: string,
    versionTag: string | null | undefined,
    resolveHref: AssetHrefResolver | undefined,
  ): string {
    const defaultHref = getBrandAssetHref(this.name, baseUrl, versionTag);
    return resolveAssetHref(
      {
        category: 'brand',
        name: this.name,
        baseUrl,
        versionTag,
        defaultHref,
      },
      resolveHref,
    );
  }

  protected defaultViewBox(): string {
    return manifest[`brand/${this.name}`]?.viewBox ?? '0 0 64 64';
  }
}

export class DaFlagElement extends ExternalAssetElement {
  @property({ type: String, attribute: 'country-code' })
  countryCode: CountryCode = 'cz';

  protected assetHref(
    baseUrl: string,
    versionTag: string | null | undefined,
    resolveHref: AssetHrefResolver | undefined,
  ): string {
    const defaultHref = getFlagHref(this.countryCode, baseUrl, versionTag);
    return resolveAssetHref(
      {
        category: 'flags',
        name: this.countryCode,
        baseUrl,
        versionTag,
        defaultHref,
      },
      resolveHref,
    );
  }

  protected defaultViewBox(): string {
    return manifest[`flags/${this.countryCode}`]?.viewBox ?? '0 0 640 480';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'da-icon': DaIconElement;
    'da-pictogram': DaPictogramElement;
    'da-illustration': DaIllustrationElement;
    'da-brand-asset': DaBrandAssetElement;
    'da-flag': DaFlagElement;
  }
}
