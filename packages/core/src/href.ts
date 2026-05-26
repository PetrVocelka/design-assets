import type {
  AssetCategory,
  BrandAssetName,
  CountryCode,
  IconName,
  IllustrationName,
  PictogramName,
} from '../generated/names.js';

const DEFAULT_BASE_URL = '/design-assets';

export interface AssetHrefResolverContext {
  category: AssetCategory;
  name: string;
  baseUrl: string;
  versionTag: string | null | undefined;
  defaultHref: string;
}

export type AssetHrefResolver = (context: AssetHrefResolverContext) => string;

export function buildAssetUrl(
  baseUrl: string,
  category: string,
  name: string,
  versionTag?: string | null,
): string {
  const path = `${baseUrl}/${category}/${name}.svg`;
  return versionTag ? `${path}?v=${versionTag}` : path;
}

export function buildAssetHref(
  baseUrl: string,
  category: string,
  name: string,
  versionTag?: string | null,
): string {
  return `${buildAssetUrl(baseUrl, category, name, versionTag)}#asset`;
}

export function resolveAssetHref(
  context: AssetHrefResolverContext,
  resolver?: AssetHrefResolver,
): string {
  return resolver ? resolver(context) : context.defaultHref;
}

export function getIconHref(
  name: IconName,
  baseUrl: string = DEFAULT_BASE_URL,
  versionTag?: string | null,
): string {
  return buildAssetHref(baseUrl, 'icons', name, versionTag);
}

export function getIconUrl(
  name: IconName,
  baseUrl: string = DEFAULT_BASE_URL,
  versionTag?: string | null,
): string {
  return buildAssetUrl(baseUrl, 'icons', name, versionTag);
}

export function getPictogramHref(
  name: PictogramName,
  baseUrl: string = DEFAULT_BASE_URL,
  versionTag?: string | null,
): string {
  return buildAssetHref(baseUrl, 'pictograms', name, versionTag);
}

export function getPictogramUrl(
  name: PictogramName,
  baseUrl: string = DEFAULT_BASE_URL,
  versionTag?: string | null,
): string {
  return buildAssetUrl(baseUrl, 'pictograms', name, versionTag);
}

export function getIllustrationHref(
  name: IllustrationName,
  baseUrl: string = DEFAULT_BASE_URL,
  versionTag?: string | null,
): string {
  return buildAssetHref(baseUrl, 'illustrations', name, versionTag);
}

export function getIllustrationUrl(
  name: IllustrationName,
  baseUrl: string = DEFAULT_BASE_URL,
  versionTag?: string | null,
): string {
  return buildAssetUrl(baseUrl, 'illustrations', name, versionTag);
}

export function getBrandAssetHref(
  name: BrandAssetName,
  baseUrl: string = DEFAULT_BASE_URL,
  versionTag?: string | null,
): string {
  return buildAssetHref(baseUrl, 'brand', name, versionTag);
}

export function getBrandAssetUrl(
  name: BrandAssetName,
  baseUrl: string = DEFAULT_BASE_URL,
  versionTag?: string | null,
): string {
  return buildAssetUrl(baseUrl, 'brand', name, versionTag);
}

export function getFlagHref(
  countryCode: CountryCode,
  baseUrl: string = DEFAULT_BASE_URL,
  versionTag?: string | null,
): string {
  return buildAssetHref(baseUrl, 'flags', countryCode, versionTag);
}

export function getFlagUrl(
  countryCode: CountryCode,
  baseUrl: string = DEFAULT_BASE_URL,
  versionTag?: string | null,
): string {
  return buildAssetUrl(baseUrl, 'flags', countryCode, versionTag);
}
