import type { CountryCode } from '@petrvocelka/design-assets-core/names';

import { ExternalSvg, type AccessibleProps } from './external-svg.js';
import { useResolvedAsset } from './asset-resolver.js';

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
  const { href, viewBox } = useResolvedAsset({
    category: 'flags',
    name: countryCode,
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
