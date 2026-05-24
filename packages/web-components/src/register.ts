import {
  DaBrandAssetElement,
  DaFlagElement,
  DaIconElement,
  DaIllustrationElement,
  DaPictogramElement,
} from './elements.js';

export { configureDesignAssets, getDesignAssetsConfig } from './config.js';
export type { DesignAssetsConfig } from './config.js';

export type RegisterableAssetCategory =
  | 'icons'
  | 'pictograms'
  | 'illustrations'
  | 'brand'
  | 'flags';

export interface DefineDesignAssetsElementsOptions {
  categories?: RegisterableAssetCategory[];
}

const ELEMENT_REGISTRY: Array<{
  category: RegisterableAssetCategory;
  tag: string;
  ElementClass: CustomElementConstructor;
}> = [
  { category: 'icons', tag: 'da-icon', ElementClass: DaIconElement },
  { category: 'pictograms', tag: 'da-pictogram', ElementClass: DaPictogramElement },
  {
    category: 'illustrations',
    tag: 'da-illustration',
    ElementClass: DaIllustrationElement,
  },
  { category: 'brand', tag: 'da-brand-asset', ElementClass: DaBrandAssetElement },
  { category: 'flags', tag: 'da-flag', ElementClass: DaFlagElement },
];

export function defineDesignAssetsElements(
  options: DefineDesignAssetsElementsOptions = {},
): void {
  const enabled = options.categories ? new Set(options.categories) : null;

  for (const { category, tag, ElementClass } of ELEMENT_REGISTRY) {
    if (enabled && !enabled.has(category)) {
      continue;
    }

    if (!customElements.get(tag)) {
      customElements.define(tag, ElementClass);
    }
  }
}

export {
  DaBrandAssetElement,
  DaFlagElement,
  DaIconElement,
  DaIllustrationElement,
  DaPictogramElement,
};
