import { execSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { collectAssets } from './lib/collect-assets.js';
import {
  validateAssetContent,
  validateDuplicateNames,
  validateFlagsInManifest,
  validateLifecycle,
  type ValidationIssue,
} from './lib/validate-assets.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CORE_ROOT = join(__dirname, '..');
const REPO_ROOT = join(CORE_ROOT, '..', '..');

function printIssues(issues: ValidationIssue[]): void {
  for (const issue of issues) {
    const prefix = issue.level === 'error' ? 'ERROR' : 'WARN';
    const asset = issue.asset ? ` [${issue.asset}]` : '';
    console.log(`${prefix}${asset}: ${issue.message}`);
  }
}

async function readHeadManifest(): Promise<
  Array<{ name: string; category: string; deprecated?: boolean }>
> {
  try {
    const output = execSync(
      'git show HEAD:packages/core/generated/manifest.json',
      { cwd: REPO_ROOT, encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] },
    );
    return JSON.parse(output) as Array<{
      name: string;
      category: string;
      deprecated?: boolean;
    }>;
  } catch {
    return [];
  }
}

async function main(): Promise<void> {
  const assets = await collectAssets();
  const issues: ValidationIssue[] = [];

  issues.push(...validateDuplicateNames(assets));

  for (const asset of assets) {
    issues.push(...validateAssetContent(asset));
  }

  const manifestPath = join(CORE_ROOT, 'generated', 'manifest.json');
  issues.push(...(await validateFlagsInManifest(manifestPath)));

  const currentManifest = JSON.parse(
    await readFile(manifestPath, 'utf8'),
  ) as Array<{ name: string; category: string; deprecated?: boolean }>;

  const previousManifest = await readHeadManifest();
  issues.push(
    ...(await validateLifecycle(currentManifest, previousManifest, {
      changesetDir: join(REPO_ROOT, '.changeset'),
      lifecycleOverridePath: join(REPO_ROOT, 'LIFECYCLE_OVERRIDE.md'),
    })),
  );

  printIssues(issues);

  const errors = issues.filter((i) => i.level === 'error');
  if (errors.length > 0) {
    process.exit(1);
  }
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
