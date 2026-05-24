import { optimize } from 'svgo';

import { getSvgoConfig } from './svgo-config.js';
import type { ColorMode, RawAsset, OptimizedAsset } from './types.js';

const DISALLOWED_COLOR =
  /(?:fill|stroke)\s*=\s*["'](?!none|currentColor)[^"']+["']/gi;

function extractViewBox(svg: string): string {
  const match = svg.match(/viewBox=["']([^"']+)["']/);
  if (!match?.[1]) {
    throw new Error('SVG missing viewBox after optimization');
  }
  return match[1];
}

function extractInnerHtml(svg: string): string {
  const openTagEnd = svg.indexOf('>');
  const closeTagStart = svg.lastIndexOf('</svg>');
  if (openTagEnd === -1 || closeTagStart === -1) {
    throw new Error('Invalid SVG structure');
  }
  return svg.slice(openTagEnd + 1, closeTagStart).trim();
}

function detectColorMode(svg: string, category: string): ColorMode {
  if (category === 'icons') {
    return 'monochrome';
  }

  const hasHardcodedColor = DISALLOWED_COLOR.test(svg);
  return hasHardcodedColor ? 'colored' : 'monochrome';
}

export function optimizeSvg(asset: RawAsset): OptimizedAsset {
  const result = optimize(asset.sourceContent, {
    plugins: getSvgoConfig(asset.category),
    multipass: true,
  });

  const optimizedContent = result.data;
  const viewBox = extractViewBox(optimizedContent);
  const colorMode = detectColorMode(optimizedContent, asset.category);
  const innerHtml = extractInnerHtml(optimizedContent);

  return {
    ...asset,
    optimizedContent,
    viewBox,
    colorMode,
    innerHtml,
  };
}

export function wrapSvgForExternalUse(
  optimized: OptimizedAsset,
): string {
  const { viewBox, innerHtml, category } = optimized;

  if (category === 'icons') {
    return `<svg xmlns="http://www.w3.org/2000/svg" id="asset" viewBox="${viewBox}" fill="none" stroke="currentColor">${innerHtml}</svg>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" id="asset" viewBox="${viewBox}">${innerHtml}</svg>`;
}
