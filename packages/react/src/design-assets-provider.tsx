import { createContext, useContext, type ReactNode } from 'react';
import { ASSETS_VERSION, type AssetHrefResolver } from '@design-assets/core';

export interface DesignAssetsContextValue {
  baseUrl: string;
  versionTag: string | null | undefined;
  resolveHref?: AssetHrefResolver;
}

const DesignAssetsContext = createContext<DesignAssetsContextValue>({
  baseUrl: '/design-assets',
  versionTag: ASSETS_VERSION,
});

export interface DesignAssetsProviderProps {
  baseUrl?: string;
  versionTag?: string | null;
  resolveHref?: AssetHrefResolver;
  children: ReactNode;
}

export function DesignAssetsProvider({
  baseUrl = '/design-assets',
  versionTag = ASSETS_VERSION,
  resolveHref,
  children,
}: DesignAssetsProviderProps) {
  return (
    <DesignAssetsContext.Provider value={{ baseUrl, versionTag, resolveHref }}>
      {children}
    </DesignAssetsContext.Provider>
  );
}

export function useDesignAssets(): DesignAssetsContextValue {
  return useContext(DesignAssetsContext);
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
