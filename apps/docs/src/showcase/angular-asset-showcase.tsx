import { createElement, type ReactNode } from 'react';
import { ShowcaseShell, type Theme } from './showcase-shell';
import type { SizePresetEntry } from '../stories/story-helpers';

type AssetCategory = 'icons' | 'pictograms' | 'illustrations' | 'brand' | 'flags';

const WC_TAGS: Record<AssetCategory, string> = {
  icons: 'da-icon',
  pictograms: 'da-pictogram',
  illustrations: 'da-illustration',
  brand: 'da-brand-asset',
  flags: 'da-flag',
};

const WC_NAME_ATTR: Record<AssetCategory, string> = {
  icons: 'name',
  pictograms: 'name',
  illustrations: 'name',
  brand: 'name',
  flags: 'country-code',
};

const ANGULAR_IMPORTS: Record<AssetCategory, string> = {
  icons: 'IconComponent',
  pictograms: 'PictogramComponent',
  illustrations: 'IllustrationComponent',
  brand: 'BrandAssetComponent',
  flags: 'FlagComponent',
};

const ANGULAR_SELECTORS: Record<AssetCategory, string> = {
  icons: 'da-ng-icon',
  pictograms: 'da-ng-pictogram',
  illustrations: 'da-ng-illustration',
  brand: 'da-ng-brand-asset',
  flags: 'da-ng-flag',
};

const ANGULAR_BINDINGS: Record<AssetCategory, string> = {
  icons: 'name',
  pictograms: 'name',
  illustrations: 'name',
  brand: 'name',
  flags: 'countryCode',
};

interface AngularAssetShowcaseProps {
  category: AssetCategory;
  componentName: string;
  name: string;
  size: string;
  theme: Theme;
  decorative: boolean;
  ariaLabel: string;
  sizePresets: Record<string, SizePresetEntry>;
  intro: ReactNode;
}

function buildAngularSnippet(
  category: AssetCategory,
  name: string,
  className: string,
  decorative: boolean,
  ariaLabel: string,
): string {
  const importName = ANGULAR_IMPORTS[category];
  const selector = ANGULAR_SELECTORS[category];
  const binding = ANGULAR_BINDINGS[category];
  const a11y = decorative ? '[decorative]="true"' : `[ariaLabel]="'${ariaLabel}'"`;

  return `import { ${importName}, provideDesignAssets } from '@design-assets/angular';

// app.config.ts — providers: [provideDesignAssets({ baseUrl: '/design-assets' })]

@Component({
  imports: [${importName}],
  template: \`
    <${selector}
      [${binding}]="'${name}'"
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
  decorative,
  ariaLabel,
  sizePresets,
  intro,
}: AngularAssetShowcaseProps) {
  const tag = WC_TAGS[category];
  const nameAttr = WC_NAME_ATTR[category];
  const selected = sizePresets[size] ?? Object.values(sizePresets)[0]!;
  const snippet = buildAngularSnippet(
    category,
    name,
    selected.className,
    decorative,
    ariaLabel,
  );

  const elementProps: Record<string, string | boolean> = {
    [nameAttr]: name,
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
            Typed Angular adapter: <code>{componentName}</code> from{' '}
            <code>@design-assets/angular</code>. Preview uses web components (same SVG files).
            Full app: <code>apps/demo-angular</code>.
          </p>
        </>
      }
      theme={theme}
      meta={
        <>
          <code>{name}</code> · <code>{selected.token}</code> · Angular ·{' '}
          {decorative ? 'decorative' : `labelled (“${ariaLabel}”)`}
        </>
      }
      snippet={snippet}
    >
      {createElement(tag, elementProps)}
    </ShowcaseShell>
  );
}
