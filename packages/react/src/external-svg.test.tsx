import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ExternalSvg, resolveAccessibility } from './external-svg.js';

describe('resolveAccessibility', () => {
  it('defaults to decorative when no a11y props are passed', () => {
    expect(resolveAccessibility({})).toEqual({
      ariaHidden: true,
      role: undefined,
      ariaLabel: undefined,
    });
  });

  it('marks explicit decorative icons as aria-hidden', () => {
    expect(resolveAccessibility({ decorative: true })).toEqual({
      ariaHidden: true,
      role: undefined,
      ariaLabel: undefined,
    });
  });

  it('uses role=img only with a non-empty ariaLabel', () => {
    expect(resolveAccessibility({ ariaLabel: 'Example shape' })).toEqual({
      ariaHidden: undefined,
      role: 'img',
      ariaLabel: 'Example shape',
    });
  });

  it('falls back to decorative when ariaLabel is empty at runtime', () => {
    expect(resolveAccessibility({ ariaLabel: '' })).toEqual({
      ariaHidden: true,
      role: undefined,
      ariaLabel: undefined,
    });
  });

  it('falls back to decorative for whitespace-only labels', () => {
    expect(resolveAccessibility({ ariaLabel: '   ' })).toEqual({
      ariaHidden: true,
      role: undefined,
      ariaLabel: undefined,
    });
  });
});

describe('ExternalSvg', () => {
  it('renders decorative svg with aria-hidden and no role', () => {
    render(
      <ExternalSvg
        viewBox="0 0 24 24"
        href="/design-assets/icons/circle.svg#asset"
      />,
    );

    const svg = document.querySelector('svg');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
    expect(svg).not.toHaveAttribute('role');
    expect(svg).not.toHaveAttribute('aria-label');
  });

  it('renders explicit decorative svg with aria-hidden', () => {
    render(
      <ExternalSvg
        viewBox="0 0 24 24"
        href="/design-assets/icons/circle.svg#asset"
        decorative
      />,
    );

    expect(document.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders semantic svg with role=img and aria-label', () => {
    render(
      <ExternalSvg
        viewBox="0 0 24 24"
        href="/design-assets/icons/square.svg#asset"
        ariaLabel="Example shape"
      />,
    );

    expect(screen.getByRole('img', { name: 'Example shape' })).toBeInTheDocument();
  });
});
