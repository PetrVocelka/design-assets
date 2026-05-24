export const ASSET_CATEGORIES = [
  'icons',
  'pictograms',
  'illustrations',
  'brand',
  'flags',
] as const;

export type AssetCategory = (typeof ASSET_CATEGORIES)[number];

export const CATEGORY_VIEWBOX: Record<AssetCategory, string | null> = {
  icons: '0 0 24 24',
  pictograms: null,
  illustrations: null,
  brand: null,
  flags: null,
};

export const CATEGORY_SIZE_LIMITS: Record<AssetCategory, number> = {
  icons: 5 * 1024,
  pictograms: 20 * 1024,
  illustrations: 80 * 1024,
  brand: 30 * 1024,
  flags: 256 * 1024,
};

export type ColorMode = 'monochrome' | 'colored';

export interface RawAsset {
  name: string;
  category: AssetCategory;
  sourcePath: string;
  sourceContent: string;
  flagMeta?: {
    sourcePackage: 'flag-icons';
    sourceVersion: string;
    sourcePath: string;
  };
}

export interface ManifestEntry {
  name: string;
  category: AssetCategory;
  viewBox: string;
  colorMode: ColorMode;
  deprecated?: true;
  deprecatedReason?: string;
  replacement?: string;
  sourcePackage?: 'flag-icons';
  sourceVersion?: string;
  sourcePath?: string;
}

export type AssetManifest = Record<
  string,
  ManifestEntry & { id: string }
>;

export interface OptimizedAsset extends RawAsset {
  optimizedContent: string;
  viewBox: string;
  colorMode: ColorMode;
  innerHtml: string;
}
