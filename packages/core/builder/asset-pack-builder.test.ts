import { mkdtemp, readFile, rm, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import { describe, expect, it } from 'vitest';

import {
  buildDesignAssetPack,
  defineDesignAssetsConfig,
} from './asset-pack-builder.mjs';

describe('asset pack builder', () => {
  it('builds manifest, public SVGs, and per-asset Angular inline components from config', async () => {
    const root = await mkdtemp(join(tmpdir(), 'design-assets-pack-'));
    try {
      await mkdir(join(root, 'src/icons'), { recursive: true });
      await mkdir(join(root, 'src/brand'), { recursive: true });
      await writeFile(
        join(root, 'src/icons/settings.svg'),
        '<svg viewBox="0 0 24 24"><path d="M1 1h2" stroke="currentColor"/></svg>',
      );
      await writeFile(
        join(root, 'src/brand/logo.svg'),
        '<svg width="10" height="8"><path d="M0 0h10v8H0z" fill="currentColor"/></svg>',
      );

      const config = defineDesignAssetsConfig({
        sources: [{ root: 'src', categories: ['icons', 'brand'] }],
        output: {
          generatedRoot: 'generated',
          publicRoot: 'generated/public/design-assets',
        },
        manifest: {
          exportName: 'testManifest',
          typePrefix: 'Test',
          categoryTypeNames: {
            icons: 'TestIconName',
            brand: 'TestBrandAssetName',
          },
        },
        angularInline: {
          outputRoot: 'generated/inline/angular',
          categories: ['icons', 'brand'],
          componentPrefix: 'Test',
          suffixes: {
            icons: 'Icon',
            brand: 'BrandAsset',
          },
          selectorPrefixes: {
            icons: 'design-asset-icon',
            brand: 'design-asset-brand',
          },
        },
        categories: {
          icons: {
            validators: [
              (entry) => {
                if (entry.viewBox !== '0 0 24 24') throw new Error('invalid icon viewBox');
              },
            ],
          },
        },
      });

      await buildDesignAssetPack(config, { cwd: root });

      await expect(readFile(join(root, 'generated/manifest.ts'), 'utf8')).resolves.toContain(
        "export type TestIconName",
      );
      const versionSource = await readFile(join(root, 'generated/version.ts'), 'utf8');
      expect(versionSource).toContain('export const TEST_DESIGN_ASSETS_VERSION = ');
      expect(versionSource).toMatch(/[a-f0-9]{12}/);
      await expect(
        readFile(join(root, 'generated/public/design-assets/icons/settings.svg'), 'utf8'),
      ).resolves.toContain('id="asset"');
      const inlineComponent = await readFile(
        join(root, 'generated/inline/angular/icons/SettingsIconComponent.ts'),
        'utf8',
      );
      expect(inlineComponent).toContain("selector: 'design-asset-icon-settings'");
      expect(inlineComponent).not.toContain("class: '");
      expect(inlineComponent).not.toContain('styles:');
      expect(inlineComponent).not.toContain('width: 100%');
      await expect(
        readFile(join(root, 'generated/inline/angular/index.ts'), 'utf8'),
      ).resolves.toContain("export * from './icons';");
    } finally {
      await rm(root, { recursive: true, force: true });
    }
  });

  it('adds the xlink namespace when wrapped public SVGs use xlink references', async () => {
    const root = await mkdtemp(join(tmpdir(), 'design-assets-pack-xlink-'));
    try {
      await mkdir(join(root, 'src/flags'), { recursive: true });
      await writeFile(
        join(root, 'src/flags/pt.svg'),
        '<svg viewBox="0 0 640 480"><path id="a" d="M0 0h1v1H0z"/><use xlink:href="#a" width="100%" height="100%"/></svg>',
      );

      const config = defineDesignAssetsConfig({
        sources: [{ root: 'src', categories: ['flags'] }],
        output: {
          generatedRoot: 'generated',
          publicRoot: 'generated/public/design-assets',
        },
        manifest: {
          exportName: 'testManifest',
          typePrefix: 'Test',
        },
      });

      await buildDesignAssetPack(config, { cwd: root });

      await expect(
        readFile(join(root, 'generated/public/design-assets/flags/pt.svg'), 'utf8'),
      ).resolves.toContain('xmlns:xlink="http://www.w3.org/1999/xlink"');
    } finally {
      await rm(root, { recursive: true, force: true });
    }
  });
});
