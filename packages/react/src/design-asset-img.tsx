import type { AssetCategory } from '@petrvocelka/design-assets-core/names';

import {
  type AssetNameForCategory,
  useResolvedAsset,
} from './asset-resolver.js';

type DecorativeImageProps = {
  decorative: true;
  alt?: never;
};

type SemanticImageProps = {
  decorative?: false | undefined;
  alt: string;
};

export type DesignAssetImgProps<Category extends AssetCategory = AssetCategory> =
  (DecorativeImageProps | SemanticImageProps) & {
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
  decorative,
  alt,
}: DesignAssetImgProps<Category>) {
  const { src } = useResolvedAsset({ category, name, baseUrl, versionTag });
  const altText = decorative ? '' : alt;

  return (
    <img
      src={src}
      className={className}
      alt={altText}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
    />
  );
}
