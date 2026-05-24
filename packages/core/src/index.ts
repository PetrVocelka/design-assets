import { manifest } from '../generated/manifest.js';

export { manifest };
export { ASSETS_VERSION } from '../generated/version.js';
export {
  type IconName,
  type PictogramName,
  type IllustrationName,
  type BrandAssetName,
  type CountryCode,
  type AssetCategory,
} from '../generated/names.js';
export type { AssetManifest, ManifestEntry } from '../generated/manifest.js';
export {
  buildAssetHref,
  resolveAssetHref,
  getIconHref,
  getPictogramHref,
  getIllustrationHref,
  getBrandAssetHref,
  getFlagHref,
  type AssetHrefResolver,
  type AssetHrefResolverContext,
} from './href.js';
export { emojiToPictogram } from './emoji-map.js';

export function getIconsManifest() {
  return Object.values(manifest).filter((entry) => entry.category === 'icons');
}

export function getPictogramsManifest() {
  return Object.values(manifest).filter(
    (entry) => entry.category === 'pictograms',
  );
}

export function getIllustrationsManifest() {
  return Object.values(manifest).filter(
    (entry) => entry.category === 'illustrations',
  );
}

export function getBrandManifest() {
  return Object.values(manifest).filter((entry) => entry.category === 'brand');
}

export function getFlagsManifest() {
  return Object.values(manifest).filter((entry) => entry.category === 'flags');
}
