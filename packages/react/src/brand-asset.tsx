import type { BrandAssetName } from '@petrvocelka/design-assets-core/names';

import { ExternalSvg, type AccessibleProps } from './external-svg.js';
import { useResolvedAsset } from './asset-resolver.js';

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
  const { href, viewBox } = useResolvedAsset({
    category: 'brand',
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
