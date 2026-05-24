import {
  getBrandAssetHref,
  manifest,
  resolveAssetHref,
  type BrandAssetName,
} from '@design-assets/core';

import { ExternalSvg, type AccessibleProps } from './external-svg.js';
import {
  resolveVersionTag,
  useDesignAssets,
} from './design-assets-provider.js';

export type BrandAssetProps = AccessibleProps & {
  name: BrandAssetName;
  className?: string;
  baseUrl?: string;
  versionTag?: string | null;
};

export function BrandAsset({
  name,
  className,
  baseUrl: baseUrlOverride,
  versionTag: versionTagOverride,
  ...a11y
}: BrandAssetProps) {
  const { baseUrl, versionTag, resolveHref } = useDesignAssets();
  const entry = manifest[`brand/${name}`];
  const resolvedBaseUrl = baseUrlOverride ?? baseUrl;
  const resolvedVersionTag = resolveVersionTag(versionTag, versionTagOverride);
  const defaultHref = getBrandAssetHref(name, resolvedBaseUrl, resolvedVersionTag);
  const href = resolveAssetHref(
    {
      category: 'brand',
      name,
      baseUrl: resolvedBaseUrl,
      versionTag: resolvedVersionTag,
      defaultHref,
    },
    resolveHref,
  );

  return (
    <ExternalSvg
      viewBox={entry?.viewBox ?? '0 0 64 64'}
      href={href}
      className={className}
      {...a11y}
    />
  );
}
