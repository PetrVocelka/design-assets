import { createElement, type ReactNode } from 'react';
import {
  inlineComponentName,
  ShowcaseShell,
  type RenderMode,
  type Theme,
} from './showcase-shell';
import type { SizePresetEntry } from '../stories/story-helpers';

type AssetCategory = 'icons' | 'pictograms' | 'illustrations' | 'brand' | 'flags';

const INLINE_SELECTOR_CATEGORY: Record<AssetCategory, string> = {
  icons: 'icon',
  pictograms: 'pictogram',
  illustrations: 'illustration',
  brand: 'brand',
  flags: 'flag',
};

interface AngularAssetShowcaseProps {
  category: AssetCategory;
  componentName: string;
  name: string;
  size: string;
  theme: Theme;
  renderMode: RenderMode;
  decorative: boolean;
  ariaLabel: string;
  sizePresets: Record<string, SizePresetEntry>;
  intro: ReactNode;
}

function buildAngularSnippet(
  category: AssetCategory,
  name: string,
  className: string,
  renderMode: RenderMode,
  decorative: boolean,
  ariaLabel: string,
): string {
  const a11y = decorative ? '[decorative]="true"' : `[ariaLabel]="'${ariaLabel}'"`;

  if (renderMode === 'inline') {
    const importName = `${inlineComponentName(category, name)}Component`;
    const selector = `design-asset-${INLINE_SELECTOR_CATEGORY[category]}-${name}`;

    return `import { ${importName} } from '@petrvocelka/design-assets-angular/inline';

@Component({
  imports: [${importName}],
  template: \`
    <${selector}
      class="${className}"
      ${a11y}
    />
  \`,
})
export class ExampleComponent {}`;
  }

  const importName = renderMode === 'img' ? 'DesignAssetImgComponent' : 'DesignAssetUseComponent';
  const selector = renderMode === 'img' ? 'design-asset-img' : 'design-asset-use';

  return `import { ${importName}, provideDesignAssets } from '@petrvocelka/design-assets-angular';

// app.config.ts — providers: [provideDesignAssets({ baseUrl: '/design-assets' })]

@Component({
  imports: [${importName}],
  template: \`
    <${selector}
      category="${category}"
      name="${name}"
      class="${className}"
      ${a11y}
    />
  \`,
})
export class ExampleComponent {}`;
}

export function AngularAssetShowcase({
  category,
  componentName,
  name,
  size,
  theme,
  renderMode,
  decorative,
  ariaLabel,
  sizePresets,
  intro,
}: AngularAssetShowcaseProps) {
  const tag = renderMode === 'img' ? 'da-asset-img' : 'da-asset-use';
  const selected = sizePresets[size] ?? Object.values(sizePresets)[0]!;
  const snippet = buildAngularSnippet(
    category,
    name,
    selected.className,
    renderMode,
    decorative,
    ariaLabel,
  );

  const elementProps: Record<string, string | boolean> = {
    category,
    name,
    class: selected.className,
  };
  if (decorative) {
    elementProps.decorative = true;
  } else {
    elementProps['aria-label'] = ariaLabel;
  }

  return (
    <ShowcaseShell
      intro={
        <>
          {intro}
          <p className="mt-2 text-sm text-slate-600">
            Angular examples use render-mode primitives from <code>@petrvocelka/design-assets-angular</code>.
            Inline uses the generated asset component <code>{componentName}</code>. Preview uses
            web components backed by the same SVG files.
          </p>
        </>
      }
      theme={theme}
      meta={
        <>
          <code>{name}</code> · <code>{selected.token}</code> · Angular · <code>{renderMode}</code>{' '}
          ·{' '}
          {decorative ? 'decorative' : `labelled (“${ariaLabel}”)`}
        </>
      }
      snippet={snippet}
    >
      {createElement(tag, elementProps)}
    </ShowcaseShell>
  );
}
