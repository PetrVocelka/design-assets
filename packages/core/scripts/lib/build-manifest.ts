import type { AssetManifest, ManifestEntry, OptimizedAsset } from './types.js';

function toManifestId(category: string, name: string): string {
  return `${category}/${name}`;
}

export function buildManifest(assets: OptimizedAsset[]): AssetManifest {
  const manifest: AssetManifest = {};

  for (const asset of assets) {
    const id = toManifestId(asset.category, asset.name);
    const entry: ManifestEntry = {
      name: asset.name,
      category: asset.category,
      viewBox: asset.viewBox,
      colorMode: asset.colorMode,
    };

    if (asset.flagMeta) {
      entry.sourcePackage = asset.flagMeta.sourcePackage;
      entry.sourceVersion = asset.flagMeta.sourceVersion;
      entry.sourcePath = asset.flagMeta.sourcePath;
    }

    manifest[id] = { ...entry, id };
  }

  return manifest;
}

export function manifestToSortedArray(
  manifest: AssetManifest,
): Array<ManifestEntry & { id: string }> {
  return Object.values(manifest).sort((a, b) => {
    if (a.category !== b.category) {
      return a.category.localeCompare(b.category);
    }
    return a.name.localeCompare(b.name);
  });
}
