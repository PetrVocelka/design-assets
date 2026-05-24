import { ASSETS_VERSION, type AssetHrefResolver } from '@design-assets/core';

export interface DesignAssetsConfig {
  baseUrl: string;
  versionTag: string | null | undefined;
  resolveHref?: AssetHrefResolver;
}

let globalConfig: DesignAssetsConfig = {
  baseUrl: '/design-assets',
  versionTag: ASSETS_VERSION,
};

export function configureDesignAssets(config: Partial<DesignAssetsConfig>): void {
  globalConfig = { ...globalConfig, ...config };
}

export function getDesignAssetsConfig(): DesignAssetsConfig {
  return globalConfig;
}

export function resolveVersionTag(
  contextTag: string | null | undefined,
  override?: string | null,
): string | null | undefined {
  if (override !== undefined) {
    return override;
  }
  return contextTag;
}

export function readBaseUrl(el: HTMLElement): string {
  return el.getAttribute('base-url') ?? globalConfig.baseUrl;
}

export function readVersionTag(el: HTMLElement): string | null | undefined {
  const attr = el.getAttribute('version-tag');
  if (attr === 'null') return null;
  if (attr !== null && attr !== '') return attr;
  return globalConfig.versionTag;
}
