import type { IconName } from '@petrvocelka/design-assets-core/names';

import { ExternalSvg, type AccessibleProps } from './external-svg.js';
import { useResolvedAsset } from './asset-resolver.js';

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
  const { href, viewBox } = useResolvedAsset({
    category: 'icons',
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
