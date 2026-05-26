import { InjectionToken, type Provider } from '@angular/core';
import { resolveAssetHref, type AssetHrefResolver } from '@design-assets/core/href';
import type { AssetCategory } from '@design-assets/core/names';
import { ASSETS_VERSION } from '@design-assets/core/version';

export interface DesignAssetsConfig {
  baseUrl: string;
  versionTag: string | null | undefined;
  resolveHref?: AssetHrefResolver;
}

export const DESIGN_ASSETS_CONFIG = new InjectionToken<DesignAssetsConfig>(
  'DESIGN_ASSETS_CONFIG',
  {
    factory: (): DesignAssetsConfig => ({
      baseUrl: '/design-assets',
      versionTag: ASSETS_VERSION,
    }),
  },
);

export function provideDesignAssets(
  config: Partial<DesignAssetsConfig> = {},
): Provider {
  return {
    provide: DESIGN_ASSETS_CONFIG,
    useValue: {
      baseUrl: '/design-assets',
      versionTag: ASSETS_VERSION,
      ...config,
    },
  };
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

export function resolveConfiguredHref(
  config: DesignAssetsConfig,
  context: {
    category: AssetCategory;
    name: string;
    baseUrl: string;
    versionTag: string | null | undefined;
    defaultHref: string;
  },
): string {
  return resolveAssetHref(context, config.resolveHref);
}
