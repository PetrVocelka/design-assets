import { ASSETS_VERSION } from '@petrvocelka/design-assets-core';
import { afterEach, describe, expect, it } from 'vitest';

import { defineDesignAssetsElements } from './register.js';
import { DaAssetImgElement, DaAssetUseElement, DaIconElement } from './elements.js';
import { configureDesignAssets } from './config.js';

describe('da-icon', () => {
  afterEach(() => {
    document.body.innerHTML = '';
    configureDesignAssets({
      baseUrl: '/design-assets',
      versionTag: ASSETS_VERSION,
      resolveHref: undefined,
    });
  });

  it('can register only selected built-in categories', async () => {
    defineDesignAssetsElements({ categories: ['icons'] });
    await customElements.whenDefined('da-icon');

    expect(customElements.get('da-icon')).toBeDefined();
    expect(customElements.get('da-pictogram')).toBeUndefined();
    expect(customElements.get('da-illustration')).toBeUndefined();
    expect(customElements.get('da-flag')).toBeUndefined();
  });

  it('registers and renders external use href', async () => {
    defineDesignAssetsElements();
    await customElements.whenDefined('da-icon');

    const el = document.createElement('da-icon') as DaIconElement;
    el.name = 'square';
    el.className = 'h-6 w-6 shrink-0 inline-block';
    el.setAttribute('decorative', '');
    document.body.appendChild(el);
    await el.updateComplete;

    const svg = el.querySelector('svg');
    expect(svg).not.toBeNull();
    expect(svg?.getAttribute('viewBox')).toBe('0 0 24 24');
    expect(svg?.getAttribute('aria-hidden')).toBe('true');
    expect(svg?.getAttribute('class')).toContain('h-6');

    const useEl = svg?.querySelector('use');
    expect(useEl?.getAttribute('href')).toMatch(
      new RegExp(`/design-assets/icons/square\\.svg\\?v=${ASSETS_VERSION}#asset$`),
    );
  });

  it('registers generic use and img primitives', async () => {
    defineDesignAssetsElements({ categories: ['primitives'] });
    await customElements.whenDefined('da-asset-use');
    await customElements.whenDefined('da-asset-img');

    const useEl = document.createElement('da-asset-use') as DaAssetUseElement;
    useEl.category = 'flags';
    useEl.name = 'cz';
    useEl.setAttribute('aria-label', 'Czech Republic');
    document.body.appendChild(useEl);
    await useEl.updateComplete;

    expect(useEl.querySelector('svg')?.getAttribute('viewBox')).toBe('0 0 640 480');
    expect(useEl.querySelector('use')?.getAttribute('href')).toMatch(
      new RegExp(`/design-assets/flags/cz\\.svg\\?v=${ASSETS_VERSION}#asset$`),
    );

    const imgEl = document.createElement('da-asset-img') as DaAssetImgElement;
    imgEl.category = 'flags';
    imgEl.name = 'cz';
    imgEl.setAttribute('aria-label', 'Czech Republic');
    document.body.appendChild(imgEl);
    await imgEl.updateComplete;

    const img = imgEl.querySelector('img');
    expect(img?.getAttribute('src')).toBe(`/design-assets/flags/cz.svg?v=${ASSETS_VERSION}`);
    expect(img?.getAttribute('alt')).toBe('Czech Republic');
    expect(img?.getAttribute('loading')).toBe('lazy');
    expect(img?.getAttribute('decoding')).toBe('async');
  });

  it('supports custom href resolution for consumer-owned flag assets', async () => {
    defineDesignAssetsElements({ categories: ['flags'] });
    await customElements.whenDefined('da-flag');

    configureDesignAssets({
      resolveHref: ({ category, name, defaultHref }) =>
        category === 'flags' ? `/local-flags/${name}.svg#asset` : defaultHref,
    });

    const el = document.createElement('da-flag');
    el.setAttribute('country-code', 'cz');
    el.setAttribute('aria-label', 'Czech Republic');
    document.body.appendChild(el);
    await (el as HTMLElement & { updateComplete: Promise<unknown> }).updateComplete;

    expect(el.querySelector('use')?.getAttribute('href')).toBe(
      '/local-flags/cz.svg#asset',
    );
  });
});
