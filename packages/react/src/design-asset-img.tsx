import type { AssetCategory } from '@petrvocelka/design-assets-core/names';

import { resolveAccessibility, type AccessibleProps } from './external-svg.js';
import {
  type AssetNameForCategory,
  useResolvedAsset,
} from './asset-resolver.js';

export type DesignAssetImgProps<Category extends AssetCategory = AssetCategory> =
  AccessibleProps & {
    category: Category;
    name: AssetNameForCategory<Category>;
    className?: string;
    baseUrl?: string;
    versionTag?: string | null;
    width?: number | string;
    height?: number | string;
    loading?: 'eager' | 'lazy';
    decoding?: 'async' | 'auto' | 'sync';
  };

export function DesignAssetImg<Category extends AssetCategory>({
  category,
  name,
  className,
  baseUrl,
  versionTag,
  width,
  height,
  loading = 'lazy',
  decoding = 'async',
  ...a11y
}: DesignAssetImgProps<Category>) {
  const { src } = useResolvedAsset({ category, name, baseUrl, versionTag });
  const { ariaHidden, ariaLabel } = resolveAccessibility(a11y);

  return (
    <img
      src={src}
      className={className}
      alt={ariaLabel ?? ''}
      aria-hidden={ariaHidden}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
    />
  );
}
