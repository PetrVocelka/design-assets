import type { ComponentType, ReactNode } from 'react';
import { DesignAssetImg } from '@petrvocelka/design-assets-react';
import * as InlineAssets from '@petrvocelka/design-assets-react/inline';
import {
  inlineComponentName,
  renderedAssetOutput,
  ShowcaseShell,
  type RenderMode,
  type Theme,
} from './showcase-shell';
import type { SizePresetEntry } from '../stories/story-helpers';

type AssetCategory = 'icons' | 'pictograms' | 'illustrations' | 'brand' | 'flags';

type InlineProps = {
  decorative?: true;
  ariaLabel?: string;
  className?: string;
};

export interface ReactAssetShowcaseProps {
  name: string;
  size: string;
  theme: Theme;
  renderMode: RenderMode;
  decorative: boolean;
  ariaLabel: string;
}

interface ReactAssetShowcaseConfig {
  assetCategory: AssetCategory;
  inlineCategory: string;
  reactExport: string;
  nameProp?: 'name' | 'countryCode';
  sizePresets: Record<string, SizePresetEntry>;
  intro: ReactNode;
  ExternalComponent: ComponentType<
    Record<string, unknown> & { className?: string; decorative?: true; ariaLabel?: string }
  >;
}

function resolveInlineComponent(category: string, name: string): ComponentType<InlineProps> {
  const componentName = inlineComponentName(category, name);
  const InlineComponent = InlineAssets[componentName as keyof typeof InlineAssets];

  if (typeof InlineComponent !== 'function') {
    throw new Error(`Missing inline component for "${name}" (${componentName})`);
  }

  return InlineComponent as ComponentType<InlineProps>;
}

function reactSnippet(
  config: ReactAssetShowcaseConfig,
  name: string,
  renderMode: RenderMode,
  decorative: boolean,
  ariaLabel: string,
  className: string,
): string {
  const nameProp = config.nameProp ?? 'name';
  const svgA11yProps = decorative ? [] : [`ariaLabel="${ariaLabel}"`];
  const imgA11yProps = decorative ? ['decorative'] : [`alt="${ariaLabel}"`];
  const renderComponent = (component: string, props: string[]): string =>
    `<${component}\n${props.map((prop) => `  ${prop}`).join('\n')}\n/>`;

  if (renderMode === 'inline') {
    const component = inlineComponentName(config.inlineCategory, name);
    return `import { ${component} } from '@petrvocelka/design-assets-react/inline';

${renderComponent(component, [...svgA11yProps, `className="${className}"`])}`;
  }

  if (renderMode === 'img') {
    return `import { DesignAssetImg } from '@petrvocelka/design-assets-react';

${renderComponent(
  'DesignAssetImg',
  [
    `category="${config.assetCategory}"`,
    `name="${name}"`,
    ...imgA11yProps,
    `className="${className}"`,
  ],
)}`;
  }

  return `import { ${config.reactExport} } from '@petrvocelka/design-assets-react';

${renderComponent(
  config.reactExport,
  [`${nameProp}="${name}"`, ...svgA11yProps, `className="${className}"`],
)}`;
}

export function createReactAssetShowcase(config: ReactAssetShowcaseConfig) {
  function ReactAssetShowcase({
    name,
    size,
    theme,
    renderMode,
    decorative,
    ariaLabel,
  }: ReactAssetShowcaseProps) {
    const selected = config.sizePresets[size] ?? Object.values(config.sizePresets)[0]!;
    const nameProp = config.nameProp ?? 'name';
    const snippet = reactSnippet(
      config,
      name,
      renderMode,
      decorative,
      ariaLabel,
      selected.className,
    );
    const renderedOutput = renderedAssetOutput({
      category: config.assetCategory,
      name,
      renderMode,
      className: selected.className,
      decorative,
      ariaLabel,
    });

    let preview: ReactNode;
    const externalProps = {
      [nameProp]: name,
      className: selected.className,
      ...(decorative ? {} : { ariaLabel }),
    };

    if (renderMode === 'inline') {
      const InlineComponent = resolveInlineComponent(config.inlineCategory, name);
      preview = decorative ? (
        <InlineComponent className={selected.className} />
      ) : (
        <InlineComponent ariaLabel={ariaLabel} className={selected.className} />
      );
    } else if (renderMode === 'img') {
      preview = decorative ? (
        <DesignAssetImg
          category={config.assetCategory}
          name={name}
          className={selected.className}
          decorative
        />
      ) : (
        <DesignAssetImg
          category={config.assetCategory}
          name={name}
          className={selected.className}
          alt={ariaLabel}
        />
      );
    } else {
      preview = <config.ExternalComponent {...externalProps} />;
    }

    const modeLabel =
      renderMode === 'use'
        ? 'external `<use href>`'
        : renderMode === 'img'
          ? 'external `<img>`'
          : 'inline bundle';

    return (
      <ShowcaseShell
        intro={config.intro}
        theme={theme}
        meta={
          <>
            <code>{name}</code> · <code>{selected.token}</code> ({selected.pixels}px) ·{' '}
            {modeLabel} · {decorative ? 'decorative' : `labelled (“${ariaLabel}”)`} · {theme}{' '}
            theme
          </>
        }
        snippet={snippet}
        renderedOutput={renderedOutput}
      >
        {preview}
      </ShowcaseShell>
    );
  }

  return ReactAssetShowcase;
}
