export interface DesignAssetPackEntry {
  category: string;
  name: string;
  file: string;
  viewBox: string;
  sourcePath: string;
  svg: string;
}

export interface DesignAssetSourceConfig {
  root?: string;
  categories?: string[];
  category?: string;
  sourceDir?: string;
}

export interface DesignAssetPackConfig {
  sources: DesignAssetSourceConfig[];
  output: {
    generatedRoot: string;
    publicRoot: string;
  };
  manifest: {
    exportName: string;
    typePrefix: string;
    categoryTypeNames?: Record<string, string>;
  };
  angularInline?: {
    outputRoot: string;
    categories: string[];
    componentPrefix?: string;
    suffixes?: Record<string, string>;
    selectorPrefix?: string;
    selectorPrefixes?: Record<string, string>;
  };
  categories?: Record<
    string,
    {
      validators?: Array<(entry: DesignAssetPackEntry) => void>;
    }
  >;
}

export interface BuildDesignAssetPackOptions {
  cwd?: string;
  check?: boolean;
  logger?: (message: string) => void;
}

export function defineDesignAssetsConfig<T extends DesignAssetPackConfig>(config: T): T;
export function loadDesignAssetsConfig(configPath: string): Promise<DesignAssetPackConfig>;
export function buildDesignAssetPack(
  config: DesignAssetPackConfig,
  options?: BuildDesignAssetPackOptions,
): Promise<{ entries: DesignAssetPackEntry[] }>;
