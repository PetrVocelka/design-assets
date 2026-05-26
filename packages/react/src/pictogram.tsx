import type { PictogramName } from '@petrvocelka/design-assets-core/names';

import { ExternalSvg, type AccessibleProps } from './external-svg.js';
import { useResolvedAsset } from './asset-resolver.js';

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
  const { href, viewBox } = useResolvedAsset({
    category: 'pictograms',
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
