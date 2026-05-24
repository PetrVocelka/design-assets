import {
  getIconHref,
  manifest,
  resolveAssetHref,
  type IconName,
} from '@design-assets/core';

import { ExternalSvg, type AccessibleProps } from './external-svg.js';
import {
  resolveVersionTag,
  useDesignAssets,
} from './design-assets-provider.js';

export type IconProps = AccessibleProps & {
  name: IconName;
  className?: string;
  baseUrl?: string;
  versionTag?: string | null;
};

export function Icon({
  name,
  className,
  baseUrl: baseUrlOverride,
  versionTag: versionTagOverride,
  ...a11y
}: IconProps) {
  const { baseUrl, versionTag, resolveHref } = useDesignAssets();
  const entry = manifest[`icons/${name}`];
  const resolvedBaseUrl = baseUrlOverride ?? baseUrl;
  const resolvedVersionTag = resolveVersionTag(versionTag, versionTagOverride);
  const defaultHref = getIconHref(name, resolvedBaseUrl, resolvedVersionTag);
  const href = resolveAssetHref(
    {
      category: 'icons',
      name,
      baseUrl: resolvedBaseUrl,
      versionTag: resolvedVersionTag,
      defaultHref,
    },
    resolveHref,
  );

  return (
    <ExternalSvg
      viewBox={entry?.viewBox ?? '0 0 24 24'}
      href={href}
      className={className}
      {...a11y}
    />
  );
}
