import {
  buildAssetHref,
  buildAssetUrl,
  resolveAssetHref,
} from '@design-assets/core/href';
import type { AssetCategory } from '@design-assets/core/names';

import {
  resolveVersionTag,
  type DesignAssetsConfig,
} from './design-assets-config';

const fallbackViewBoxes: Record<AssetCategory, string> = {
  icons: '0 0 24 24',
  pictograms: '0 0 48 48',
  illustrations: '0 0 240 160',
  brand: '0 0 64 64',
  flags: '0 0 640 480',
};

export function stripSvgFragment(src: string): string {
  return src.replace(/#.*$/, '');
}

export function resolveAssetViewBox(category: AssetCategory): string {
  return fallbackViewBoxes[category] ?? '0 0 24 24';
}

export function resolveAssetUseHref(
  config: DesignAssetsConfig,
  category: AssetCategory,
  name: string,
  baseUrlOverride?: string,
  versionTagOverride?: string | null,
): string {
  const baseUrl = baseUrlOverride ?? config.baseUrl;
  const versionTag = resolveVersionTag(config.versionTag, versionTagOverride);
  const defaultHref = buildAssetHref(baseUrl, category, name, versionTag);

  return resolveAssetHref(
    {
      category,
      name,
      baseUrl,
      versionTag,
      defaultHref,
    },
    config.resolveHref,
  );
}

export function resolveAssetImgSrc(
  config: DesignAssetsConfig,
  category: AssetCategory,
  name: string,
  baseUrlOverride?: string,
  versionTagOverride?: string | null,
): string {
  const baseUrl = baseUrlOverride ?? config.baseUrl;
  const versionTag = resolveVersionTag(config.versionTag, versionTagOverride);
  const defaultHref = buildAssetUrl(baseUrl, category, name, versionTag);
  const src = resolveAssetHref(
    {
      category,
      name,
      baseUrl,
      versionTag,
      defaultHref,
    },
    config.resolveHref,
  );

  return stripSvgFragment(src);
}
