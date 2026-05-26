import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

import { describe, expect, it } from 'vitest';

import { DesignAssetImgComponent } from './design-asset-img.component';
import { DesignAssetUseComponent } from './design-asset-use.component';

function sourceText(relativePath: string): string {
  return readFileSync(fileURLToPath(new URL(relativePath, import.meta.url)), 'utf8');
}

describe('generic Angular asset rendering modes', () => {
  it('exports standalone components for use and img rendering', () => {
    expect(DesignAssetUseComponent).toBeDefined();
    expect(DesignAssetImgComponent).toBeDefined();
  });

  it('keeps production renderers off the full runtime manifest', () => {
    const productionRendererFiles = [
      './asset-resolver.ts',
      './design-asset-use.component.ts',
      './design-asset-img.component.ts',
      './icon.component.ts',
      './pictogram.component.ts',
      './illustration.component.ts',
      './brand-asset.component.ts',
      './flag.component.ts',
    ];

    for (const file of productionRendererFiles) {
      const source = sourceText(file);
      expect(source, file).not.toMatch(/\bmanifest\b/);
      expect(source, file).not.toContain("from '@petrvocelka/design-assets-core'");
    }
  });

  it('keeps sizing styles on shared primitives instead of generated inline assets', () => {
    const useSource = sourceText('./design-asset-use.component.ts');
    const imgSource = sourceText('./design-asset-img.component.ts');
    const inlineSource = sourceText('./inline/inline-asset.component.ts');

    expect(useSource).toContain("host: { '[class]': 'className()' }");
    expect(useSource).toContain(':host > svg');
    expect(useSource).not.toContain(':host(:not(.hidden))');
    expect(useSource).not.toMatch(/:host\s*\{[^}]*display:/s);
    expect(useSource).not.toContain('[class]="className()"');

    expect(imgSource).toContain("host: { '[class]': 'className()' }");
    expect(imgSource).toContain(':host > img');
    expect(imgSource).not.toContain(':host(:not(.hidden))');
    expect(imgSource).not.toMatch(/:host\s*\{[^}]*display:/s);
    expect(imgSource).not.toContain('[class]="className()"');

    expect(inlineSource).not.toContain(':host > svg');
    expect(inlineSource).not.toContain('width: 100%');
  });
});
