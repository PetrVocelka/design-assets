import type { IllustrationName } from '@design-assets/core/names';

import { ExternalSvg, type AccessibleProps } from './external-svg.js';
import { useResolvedAsset } from './asset-resolver.js';

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
  const { href, viewBox } = useResolvedAsset({
    category: 'illustrations',
    name,
    baseUrl: baseUrlOverride,
    versionTag: versionTagOverride,
  });

  return (
    <ExternalSvg
      viewBox={viewBox}
      href={href}
      className={className}
      {...a11y}
    />
  );
}
