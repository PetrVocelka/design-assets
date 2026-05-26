import {
  buildAssetHref,
  buildAssetUrl,
  resolveAssetHref,
} from '@design-assets/core/href';
import type {
  AssetCategory,
  BrandAssetName,
  CountryCode,
  IconName,
  IllustrationName,
  PictogramName,
} from '@design-assets/core/names';

import { resolveVersionTag, useDesignAssets } from './design-assets-provider.js';

export type AssetNameForCategory<Category extends AssetCategory> =
  Category extends 'icons'
    ? IconName
    : Category extends 'pictograms'
      ? PictogramName
      : Category extends 'illustrations'
        ? IllustrationName
        : Category extends 'brand'
          ? BrandAssetName
          : CountryCode;

const fallbackViewBoxes: Record<AssetCategory, string> = {
  icons: '0 0 24 24',
  pictograms: '0 0 48 48',
  illustrations: '0 0 240 160',
  brand: '0 0 64 64',
  flags: '0 0 640 480',
};

export interface AssetRenderRequest<Category extends AssetCategory> {
  category: Category;
  name: AssetNameForCategory<Category>;
  baseUrl?: string;
  versionTag?: string | null;
}

export function stripSvgFragment(src: string): string {
  return src.replace(/#.*$/, '');
}

export function resolveAssetViewBox(category: AssetCategory): string {
  return fallbackViewBoxes[category] ?? '0 0 24 24';
}

export function useResolvedAsset<Category extends AssetCategory>({
  category,
  name,
  baseUrl: baseUrlOverride,
  versionTag: versionTagOverride,
}: AssetRenderRequest<Category>) {
  const { baseUrl, versionTag, resolveHref } = useDesignAssets();
  const resolvedBaseUrl = baseUrlOverride ?? baseUrl;
  const resolvedVersionTag = resolveVersionTag(versionTag, versionTagOverride);
  const assetName = String(name);
  const defaultHref = buildAssetHref(
    resolvedBaseUrl,
    category,
    assetName,
    resolvedVersionTag,
  );
  const defaultSrc = buildAssetUrl(
    resolvedBaseUrl,
    category,
    assetName,
    resolvedVersionTag,
  );
  const resolvedHref = resolveAssetHref(
    {
      category,
      name: assetName,
      baseUrl: resolvedBaseUrl,
      versionTag: resolvedVersionTag,
      defaultHref,
    },
    resolveHref,
  );
  const resolvedSrc = resolveAssetHref(
    {
      category,
      name: assetName,
      baseUrl: resolvedBaseUrl,
      versionTag: resolvedVersionTag,
      defaultHref: defaultSrc,
    },
    resolveHref,
  );

  return {
    href: resolvedHref,
    src: stripSvgFragment(resolvedSrc),
    viewBox: resolveAssetViewBox(category),
  };
}
