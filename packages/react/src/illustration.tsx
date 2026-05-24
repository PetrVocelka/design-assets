import {
  getIllustrationHref,
  manifest,
  resolveAssetHref,
  type IllustrationName,
} from '@design-assets/core';

import { ExternalSvg, type AccessibleProps } from './external-svg.js';
import {
  resolveVersionTag,
  useDesignAssets,
} from './design-assets-provider.js';

export type IllustrationProps = AccessibleProps & {
  name: IllustrationName;
  className?: string;
  baseUrl?: string;
  versionTag?: string | null;
};

export function Illustration({
  name,
  className,
  baseUrl: baseUrlOverride,
  versionTag: versionTagOverride,
  ...a11y
}: IllustrationProps) {
  const { baseUrl, versionTag, resolveHref } = useDesignAssets();
  const entry = manifest[`illustrations/${name}`];
  const resolvedBaseUrl = baseUrlOverride ?? baseUrl;
  const resolvedVersionTag = resolveVersionTag(versionTag, versionTagOverride);
  const defaultHref = getIllustrationHref(name, resolvedBaseUrl, resolvedVersionTag);
  const href = resolveAssetHref(
    {
      category: 'illustrations',
      name,
      baseUrl: resolvedBaseUrl,
      versionTag: resolvedVersionTag,
      defaultHref,
    },
    resolveHref,
  );

  return (
    <ExternalSvg
      viewBox={entry?.viewBox ?? '0 0 240 160'}
      href={href}
      className={className}
      {...a11y}
    />
  );
}
