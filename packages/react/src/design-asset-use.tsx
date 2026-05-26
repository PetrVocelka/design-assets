import type { AssetCategory } from '@petrvocelka/design-assets-core/names';

import { ExternalSvg, type AccessibleProps } from './external-svg.js';
import {
  type AssetNameForCategory,
  useResolvedAsset,
} from './asset-resolver.js';

export type DesignAssetUseProps<Category extends AssetCategory = AssetCategory> =
  AccessibleProps & {
    category: Category;
    name: AssetNameForCategory<Category>;
    className?: string;
    baseUrl?: string;
    versionTag?: string | null;
  };

export function DesignAssetUse<Category extends AssetCategory>({
  category,
  name,
  className,
  baseUrl,
  versionTag,
  ...a11y
}: DesignAssetUseProps<Category>) {
  const { href, viewBox } = useResolvedAsset({ category, name, baseUrl, versionTag });

  return (
    <ExternalSvg
      viewBox={viewBox}
      href={href}
      className={className}
      {...a11y}
    />
  );
}
