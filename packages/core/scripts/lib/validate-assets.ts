import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

import {
  CATEGORY_SIZE_LIMITS,
  CATEGORY_VIEWBOX,
  type AssetCategory,
  type RawAsset,
} from './types.js';
import isoCodes from './iso-3166-1-alpha-2.json' with { type: 'json' };
import designTokens from './design-tokens.json' with { type: 'json' };

const KEBAB_CASE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const FLAG_CODE = /^[a-z]{2}$/;
const ISO_SET = new Set<string>(isoCodes);

const FORBIDDEN_TAGS = [
  'script',
  'style',
  'image',
  'text',
  'clipPath',
  'mask',
  'filter',
] as const;

const HARDCODED_COLOR =
  /(?:fill|stroke)\s*=\s*["'](#[^"']+|rgb[^"']+|hsl[^"']+)["']/gi;

const TOKEN_COLORS = new Set<string>(
  Object.values(designTokens).flatMap((group) =>
    typeof group === 'object' ? Object.values(group) : [],
  ),
);

export interface ValidationIssue {
  level: 'error' | 'warn';
  message: string;
  asset?: string;
}

export interface ValidateOptions {
  sourceRoot: string;
  generatedManifestPath?: string;
  previousManifestPath?: string;
  changesetDir?: string;
  lifecycleOverridePath?: string;
}

function tagPattern(tag: string): RegExp {
  return new RegExp(`<${tag}[\\s>]`, 'i');
}

export function validateAssetContent(
  asset: Pick<RawAsset, 'name' | 'category' | 'sourceContent'>,
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const id = `${asset.category}/${asset.name}`;

  if (asset.category === 'flags') {
    if (!FLAG_CODE.test(asset.name)) {
      issues.push({
        level: 'error',
        message: `Flag filename must be ISO 3166-1 alpha-2: ${asset.name}`,
        asset: id,
      });
    } else if (!ISO_SET.has(asset.name)) {
      issues.push({
        level: 'error',
        message: `Unknown ISO 3166-1 alpha-2 code: ${asset.name}`,
        asset: id,
      });
    }
  } else if (!KEBAB_CASE.test(asset.name)) {
    issues.push({
      level: 'error',
      message: `Asset name must be kebab-case: ${asset.name}`,
      asset: id,
    });
  }

  const viewBoxMatch = asset.sourceContent.match(/viewBox=["']([^"']+)["']/);
  if (!viewBoxMatch) {
    issues.push({
      level: 'error',
      message: 'Missing viewBox',
      asset: id,
    });
  } else {
    const expected = CATEGORY_VIEWBOX[asset.category];
    if (expected && viewBoxMatch[1] !== expected) {
      issues.push({
        level: 'error',
        message: `Expected viewBox="${expected}", got "${viewBoxMatch[1]}"`,
        asset: id,
      });
    }
  }

  for (const tag of FORBIDDEN_TAGS) {
    if (asset.category === 'flags' && tag === 'clipPath') {
      continue;
    }

    if (tagPattern(tag).test(asset.sourceContent)) {
      issues.push({
        level: 'error',
        message: `Forbidden <${tag}> element`,
        asset: id,
      });
    }
  }

  if (asset.category === 'icons') {
    const matches = asset.sourceContent.matchAll(HARDCODED_COLOR);
    for (const match of matches) {
      issues.push({
        level: 'error',
        message: `Icons must use currentColor only, found: ${match[0]}`,
        asset: id,
      });
    }
  }

  if (asset.category === 'pictograms' || asset.category === 'illustrations') {
    const matches = asset.sourceContent.matchAll(HARDCODED_COLOR);
    for (const match of matches) {
      const color = match[1]?.toLowerCase();
      if (color && !TOKEN_COLORS.has(color)) {
        issues.push({
          level: 'warn',
          message: `Color ${color} is outside the design token palette`,
          asset: id,
        });
      }
    }
  }

  const byteSize = Buffer.byteLength(asset.sourceContent, 'utf8');
  const limit = CATEGORY_SIZE_LIMITS[asset.category as AssetCategory];
  const warnThreshold = limit * 0.8;

  if (byteSize >= limit) {
    issues.push({
      level: 'error',
      message: `File size ${byteSize} bytes exceeds ${limit} byte limit`,
      asset: id,
    });
  } else if (byteSize >= warnThreshold) {
    issues.push({
      level: 'warn',
      message: `File size ${byteSize} bytes is above 80% of ${limit} byte limit`,
      asset: id,
    });
  }

  return issues;
}

export function validateDuplicateNames(
  assets: Pick<RawAsset, 'name' | 'category'>[],
): ValidationIssue[] {
  const seen = new Map<string, string>();
  const issues: ValidationIssue[] = [];

  for (const asset of assets) {
    const key = `${asset.category}/${asset.name}`;
    const existing = seen.get(key);
    if (existing) {
      issues.push({
        level: 'error',
        message: `Duplicate asset name in category ${asset.category}: ${asset.name}`,
        asset: key,
      });
    } else {
      seen.set(key, asset.name);
    }
  }

  return issues;
}

interface ManifestSnapshotEntry {
  name: string;
  category: string;
  deprecated?: boolean;
}

export async function validateLifecycle(
  currentEntries: ManifestSnapshotEntry[],
  previousEntries: ManifestSnapshotEntry[],
  options: {
    changesetDir?: string;
    lifecycleOverridePath?: string;
  },
): Promise<ValidationIssue[]> {
  const issues: ValidationIssue[] = [];

  const currentKeys = new Set(
    currentEntries.map((e) => `${e.category}/${e.name}`),
  );
  const previousByKey = new Map(
    previousEntries.map((e) => [`${e.category}/${e.name}`, e]),
  );

  const removed = previousEntries.filter(
    (e) => !currentKeys.has(`${e.category}/${e.name}`),
  );

  if (removed.length === 0) {
    return issues;
  }

  const allowedRemovals = new Set<string>();
  if (options.changesetDir) {
    try {
      const files = await readdir(options.changesetDir);
      for (const file of files) {
        const content = await readFile(join(options.changesetDir, file), 'utf8');
        const matches = content.matchAll(/allow-asset-removal:\s*(\S+)/g);
        for (const match of matches) {
          allowedRemovals.add(match[1] ?? '');
        }
      }
    } catch {
      // no changesets dir
    }
  }

  let hasLifecycleOverride = false;
  if (options.lifecycleOverridePath) {
    try {
      await readFile(options.lifecycleOverridePath, 'utf8');
      hasLifecycleOverride = true;
    } catch {
      // no override
    }
  }

  for (const entry of removed) {
    const key = `${entry.category}/${entry.name}`;
    const prev = previousByKey.get(key);

  if (prev?.deprecated || allowedRemovals.has(key) || hasLifecycleOverride) {
      continue;
    }

    issues.push({
      level: 'error',
      message: `Asset removed without deprecation or allow-asset-removal: ${key}`,
      asset: key,
    });
  }

  const added = currentEntries.filter(
    (e) => !previousByKey.has(`${e.category}/${e.name}`),
  );

  if (removed.length > 0 && added.length > 0 && !hasLifecycleOverride) {
    issues.push({
      level: 'error',
      message:
        'Possible rename detected (add + remove in same change). Use add + deprecate instead.',
    });
  }

  return issues;
}

export async function validateFlagsInManifest(
  manifestPath: string,
): Promise<ValidationIssue[]> {
  const issues: ValidationIssue[] = [];
  const content = JSON.parse(await readFile(manifestPath, 'utf8')) as Array<{
    category: string;
    sourcePackage?: string;
    sourceVersion?: string;
    sourcePath?: string;
  }>;

  for (const entry of content) {
    if (entry.category !== 'flags') continue;
    if (entry.sourcePackage !== 'flag-icons') {
      issues.push({
        level: 'error',
        message: 'Flag entries must include sourcePackage: flag-icons',
      });
    }
    if (!entry.sourceVersion) {
      issues.push({
        level: 'error',
        message: 'Flag entries must include sourceVersion',
      });
    }
  }

  return issues;
}
