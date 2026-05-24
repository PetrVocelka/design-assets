import {
  getFlagHref,
  manifest,
  resolveAssetHref,
  type CountryCode,
} from '@design-assets/core';

import { ExternalSvg, type AccessibleProps } from './external-svg.js';
import {
  resolveVersionTag,
  useDesignAssets,
} from './design-assets-provider.js';

export type FlagProps = AccessibleProps & {
  countryCode: CountryCode;
  className?: string;
  baseUrl?: string;
  versionTag?: string | null;
};

export function Flag({
  countryCode,
  className,
  baseUrl: baseUrlOverride,
  versionTag: versionTagOverride,
  ...a11y
}: FlagProps) {
  const { baseUrl, versionTag, resolveHref } = useDesignAssets();
  const entry = manifest[`flags/${countryCode}`];
  const resolvedBaseUrl = baseUrlOverride ?? baseUrl;
  const resolvedVersionTag = resolveVersionTag(versionTag, versionTagOverride);
  const defaultHref = getFlagHref(countryCode, resolvedBaseUrl, resolvedVersionTag);
  const href = resolveAssetHref(
    {
      category: 'flags',
      name: countryCode,
      baseUrl: resolvedBaseUrl,
      versionTag: resolvedVersionTag,
      defaultHref,
    },
    resolveHref,
  );

  return (
    <ExternalSvg
      viewBox={entry?.viewBox ?? '0 0 640 480'}
      href={href}
      className={className}
      {...a11y}
    />
  );
}
