import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { ASSETS_VERSION } from '@petrvocelka/design-assets-core';
import { DesignAssetsProvider } from './design-assets-provider.js';
import { Flag } from './flag.js';
import { Icon } from './icon.js';

describe('Icon', () => {
  afterEach(() => cleanup());

  it('defaults to decorative without explicit prop', () => {
    const { container } = render(
      <DesignAssetsProvider>
        <Icon name="square" className="size-5" />
      </DesignAssetsProvider>,
    );

    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
  });

  it('passes consumer-owned class names through to the svg element', () => {
    const { container } = render(
      <DesignAssetsProvider>
        <div className="flex items-center justify-center">
          <Icon name="square" className="app-icon app-icon--xs shrink-0" />
        </div>
      </DesignAssetsProvider>,
    );

    const svg = container.querySelector('svg');
    expect(svg).not.toBeNull();
    expect(svg!.className.baseVal || svg!.getAttribute('class')).toContain('app-icon');
    expect(svg!.className.baseVal || svg!.getAttribute('class')).toContain('app-icon--xs');
    expect(svg!.className.baseVal || svg!.getAttribute('class')).toContain('shrink-0');
  });

  it('renders decorative icon with use href', () => {
    const { container } = render(
      <DesignAssetsProvider>
        <Icon name="square" decorative className="size-5" />
      </DesignAssetsProvider>,
    );

    const svg = container.querySelector('svg');
    expect(svg).not.toBeNull();
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    expect(svg).toHaveAttribute('aria-hidden', 'true');

    const useEl = svg!.querySelector('use');
    expect(useEl?.getAttribute('href')).toMatch(
      new RegExp(`/design-assets/icons/square\\.svg\\?v=${ASSETS_VERSION}#asset$`),
    );
  });

  it('renders labelled icon with aria-label', () => {
    render(
      <DesignAssetsProvider>
        <Icon name="square" ariaLabel="Example shape" />
      </DesignAssetsProvider>,
    );

    expect(screen.getByRole('img', { name: 'Example shape' })).toBeInTheDocument();
  });

  it('falls back to decorative when ariaLabel is empty at runtime', () => {
    const { container } = render(
      <DesignAssetsProvider>
        <Icon name="circle" ariaLabel="" />
      </DesignAssetsProvider>,
    );

    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders 50 icons without duplicating path data in DOM', () => {
    const { container } = render(
      <DesignAssetsProvider>
        {Array.from({ length: 50 }, (_, i) => (
          <Icon key={i} name="square" decorative />
        ))}
      </DesignAssetsProvider>,
    );

    expect(container.querySelectorAll('svg')).toHaveLength(50);
    expect(container.querySelectorAll('use')).toHaveLength(50);
    expect(container.querySelectorAll('path')).toHaveLength(0);
  });
});

describe('DesignAssetsProvider versionTag', () => {
  afterEach(() => cleanup());

  it('uses ASSETS_VERSION by default', () => {
    const { container } = render(
      <DesignAssetsProvider>
        <Icon name="circle" decorative />
      </DesignAssetsProvider>,
    );
    const useEl = container.querySelector('use');
    expect(useEl?.getAttribute('href')).toContain(`?v=${ASSETS_VERSION}`);
  });

  it('supports explicit version override', () => {
    const { container } = render(
      <DesignAssetsProvider versionTag="custom-tag">
        <Icon name="circle" decorative />
      </DesignAssetsProvider>,
    );
    expect(container.querySelector('use')?.getAttribute('href')).toContain(
      '?v=custom-tag',
    );
  });

  it('supports null opt-out', () => {
    const { container } = render(
      <DesignAssetsProvider versionTag={null}>
        <Icon name="circle" decorative />
      </DesignAssetsProvider>,
    );
    const href = container.querySelector('use')?.getAttribute('href') ?? '';
    expect(href).toBe('/design-assets/icons/circle.svg#asset');
  });

  it('supports custom href resolution for consumer-owned flag assets', () => {
    const { container } = render(
      <DesignAssetsProvider
        resolveHref={({ category, name, defaultHref }) =>
          category === 'flags' ? `/local-flags/${name}.svg#asset` : defaultHref
        }
      >
        <Flag countryCode="cz" ariaLabel="Czech Republic" />
      </DesignAssetsProvider>,
    );

    expect(container.querySelector('use')?.getAttribute('href')).toBe(
      '/local-flags/cz.svg#asset',
    );
  });
});
