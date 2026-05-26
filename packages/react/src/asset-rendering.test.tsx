import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { ASSETS_VERSION } from '@petrvocelka/design-assets-core';

import { DesignAssetImg } from './design-asset-img.js';
import { DesignAssetUse } from './design-asset-use.js';
import { DesignAssetsProvider } from './design-assets-provider.js';

function sourceText(relativePath: string): string {
  return readFileSync(fileURLToPath(new URL(relativePath, import.meta.url)), 'utf8');
}

describe('generic asset rendering modes', () => {
  afterEach(() => cleanup());

  it('renders any manifest asset through external svg use', () => {
    const { container } = render(
      <DesignAssetsProvider>
        <DesignAssetUse category="brand" name="logo-mark" decorative className="size-8" />
      </DesignAssetsProvider>,
    );

    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 64 64');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
    expect(svg?.querySelector('use')?.getAttribute('href')).toMatch(
      new RegExp(`/design-assets/brand/logo-mark\\.svg\\?v=${ASSETS_VERSION}#asset$`),
    );
  });

  it('renders any manifest asset through img without the svg fragment', () => {
    render(
      <DesignAssetsProvider>
        <DesignAssetImg category="flags" name="cz" ariaLabel="Czech Republic" className="flag" />
      </DesignAssetsProvider>,
    );

    const img = screen.getByRole('img', { name: 'Czech Republic' });
    expect(img).toHaveAttribute(
      'src',
      `/design-assets/flags/cz.svg?v=${ASSETS_VERSION}`,
    );
    expect(img).toHaveAttribute('loading', 'lazy');
    expect(img).toHaveAttribute('decoding', 'async');
  });

  it('strips use fragments from custom href resolvers for img rendering', () => {
    const { container } = render(
      <DesignAssetsProvider
        resolveHref={({ category, name }) => `/cdn/${category}/${name}.svg#asset`}
      >
        <DesignAssetImg category="icons" name="square" decorative />
      </DesignAssetsProvider>,
    );

    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      '/cdn/icons/square.svg',
    );
  });

  it('keeps production renderers off the full runtime manifest', () => {
    const productionRendererFiles = [
      './asset-resolver.ts',
      './design-asset-use.tsx',
      './design-asset-img.tsx',
      './icon.tsx',
      './pictogram.tsx',
      './illustration.tsx',
      './brand-asset.tsx',
      './flag.tsx',
    ];

    for (const file of productionRendererFiles) {
      const source = sourceText(file);
      expect(source, file).not.toMatch(/\bmanifest\b/);
      expect(source, file).not.toContain("from '@petrvocelka/design-assets-core'");
    }
  });
});
