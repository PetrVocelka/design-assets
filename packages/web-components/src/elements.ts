import { html, LitElement, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import {
  buildAssetHref,
  buildAssetUrl,
  getBrandAssetHref,
  getFlagHref,
  getIconHref,
  getIllustrationHref,
  getPictogramHref,
  manifest,
  resolveAssetHref,
  type AssetCategory,
  type AssetHrefResolver,
  type BrandAssetName,
  type CountryCode,
  type IconName,
  type IllustrationName,
  type PictogramName,
} from '@petrvocelka/design-assets-core';

import { readA11yFromElement, resolveAccessibility } from './a11y.js';
import { getDesignAssetsConfig, readBaseUrl, readVersionTag } from './config.js';
import { ExternalAssetElement } from './external-asset-element.js';

export class DaAssetUseElement extends ExternalAssetElement {
  @property({ type: String }) category: AssetCategory = 'icons';
  @property({ type: String }) name = 'square';

  protected assetHref(
    baseUrl: string,
    versionTag: string | null | undefined,
    resolveHref: AssetHrefResolver | undefined,
  ): string {
    const defaultHref = buildAssetHref(baseUrl, this.category, this.name, versionTag);
    return resolveAssetHref(
      {
        category: this.category,
        name: this.name,
        baseUrl,
        versionTag,
        defaultHref,
      },
      resolveHref,
    );
  }

  protected defaultViewBox(): string {
    const key = `${this.category}/${this.name}` as keyof typeof manifest;
    return manifest[key]?.viewBox ?? '0 0 24 24';
  }
}

export class DaAssetImgElement extends LitElement {
  @property({ type: String }) category: AssetCategory = 'icons';
  @property({ type: String }) name = 'square';
  @property({ type: String, attribute: 'aria-label' }) ariaLabel = '';
  @property({ type: String, reflect: true }) decorative: string | undefined;
  @property({ type: String, attribute: 'class' }) className = '';
  @property({ type: String }) loading: 'eager' | 'lazy' = 'lazy';
  @property({ type: String }) decoding: 'async' | 'auto' | 'sync' = 'async';

  /** Light DOM so consumer CSS controls sizing and layout. */
  protected override createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  protected override render(): TemplateResult {
    const baseUrl = readBaseUrl(this);
    const versionTag = readVersionTag(this);
    const defaultHref = buildAssetUrl(baseUrl, this.category, this.name, versionTag);
    const src = resolveAssetHref(
      {
        category: this.category,
        name: this.name,
        baseUrl,
        versionTag,
        defaultHref,
      },
      getDesignAssetsConfig().resolveHref,
    );
    const a11y = resolveAccessibility(readA11yFromElement(this));

    return html`
      <img
        src=${src}
        class=${this.className}
        alt=${a11y.ariaLabel ?? ''}
        aria-hidden=${a11y.ariaHidden ? 'true' : undefined}
        loading=${this.loading}
        decoding=${this.decoding}
      />
    `;
  }
}

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
    'da-asset-use': DaAssetUseElement;
    'da-asset-img': DaAssetImgElement;
    'da-icon': DaIconElement;
    'da-pictogram': DaPictogramElement;
    'da-illustration': DaIllustrationElement;
    'da-brand-asset': DaBrandAssetElement;
    'da-flag': DaFlagElement;
  }
}
