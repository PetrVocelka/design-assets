import { html, LitElement, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import type { AssetHrefResolver } from '@petrvocelka/design-assets-core';

import { readA11yFromElement, resolveAccessibility } from './a11y.js';
import { getDesignAssetsConfig, readBaseUrl, readVersionTag } from './config.js';

export abstract class ExternalAssetElement extends LitElement {
  @property({ type: String, attribute: 'aria-label' })
  ariaLabel = '';

  @property({ type: String, reflect: true })
  decorative: string | undefined;

  @property({ type: String, attribute: 'class' })
  className = '';

  /** Light DOM so external `<use href>` and consumer CSS (currentColor, sizing) work reliably. */
  protected override createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  protected abstract assetHref(
    baseUrl: string,
    versionTag: string | null | undefined,
    resolveHref: AssetHrefResolver | undefined,
  ): string;

  protected abstract defaultViewBox(): string;

  protected resolveViewBox(): string {
    return this.defaultViewBox();
  }

  protected renderSvg(): TemplateResult {
    const baseUrl = readBaseUrl(this);
    const versionTag = readVersionTag(this);
    const href = this.assetHref(baseUrl, versionTag, getDesignAssetsConfig().resolveHref);
    const a11y = resolveAccessibility(readA11yFromElement(this));

    return html`
      <svg
        viewBox=${this.resolveViewBox()}
        class=${this.className}
        aria-hidden=${a11y.ariaHidden ? 'true' : undefined}
        role=${a11y.role}
        aria-label=${a11y.ariaLabel}
        focusable="false"
      >
        <use href=${href}></use>
      </svg>
    `;
  }

  protected override render(): TemplateResult {
    return this.renderSvg();
  }
}
