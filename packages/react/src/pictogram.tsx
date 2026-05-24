import {
  getPictogramHref,
  manifest,
  resolveAssetHref,
  type PictogramName,
} from '@design-assets/core';

import { ExternalSvg, type AccessibleProps } from './external-svg.js';
import {
  resolveVersionTag,
  useDesignAssets,
} from './design-assets-provider.js';

export type PictogramProps = AccessibleProps & {
  name: PictogramName;
  className?: string;
  baseUrl?: string;
  versionTag?: string | null;
};

export function Pictogram({
  name,
  className,
  baseUrl: baseUrlOverride,
  versionTag: versionTagOverride,
  ...a11y
}: PictogramProps) {
  const { baseUrl, versionTag, resolveHref } = useDesignAssets();
  const entry = manifest[`pictograms/${name}`];
  const resolvedBaseUrl = baseUrlOverride ?? baseUrl;
  const resolvedVersionTag = resolveVersionTag(versionTag, versionTagOverride);
  const defaultHref = getPictogramHref(name, resolvedBaseUrl, resolvedVersionTag);
  const href = resolveAssetHref(
    {
      category: 'pictograms',
      name,
      baseUrl: resolvedBaseUrl,
      versionTag: resolvedVersionTag,
      defaultHref,
    },
    resolveHref,
  );

  return (
    <ExternalSvg
      viewBox={entry?.viewBox ?? '0 0 48 48'}
      href={href}
      className={className}
      {...a11y}
    />
  );
}
