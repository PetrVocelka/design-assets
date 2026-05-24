import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderInline } from './render-inline.js';

describe('renderInline', () => {
  it('renders monochrome inline icons with fill=none and stroke=currentColor', () => {
    render(
      renderInline({
        spec: {
          viewBox: '0 0 24 24',
          innerHtml: '<path d="M0 0"/>',
          colorMode: 'monochrome',
        },
        decorative: true,
        className: 'text-blue-600',
      }),
    );

    const svg = document.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    expect(svg).toHaveAttribute('fill', 'none');
    expect(svg).toHaveAttribute('stroke', 'currentColor');
    expect(svg?.innerHTML).toContain('<path d="M0 0">');
  });
});
