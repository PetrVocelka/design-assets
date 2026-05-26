import { createElement, type ComponentType, type ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  getBrandAssetHref,
  getFlagHref,
  getIconHref,
  getIllustrationHref,
  getPictogramHref,
} from '@petrvocelka/design-assets-core';
import { AngularAssetShowcase } from '../showcase/angular-asset-showcase';
import { WcAssetShowcase } from '../showcase/wc-asset-showcase';
import { createReactAssetShowcase } from '../showcase/react-asset-showcase';
import { showcaseControlArgTypes, type RenderMode } from '../showcase/showcase-shell';
import {
  a11yArgTypes,
  sizePresetArgType,
  type SizePresetEntry,
} from './story-helpers.js';

export interface ComponentStoriesConfig {
  title: string;
  component: ComponentType;
  docsDescription: string;
  assetCategory: 'icons' | 'pictograms' | 'illustrations' | 'brand' | 'flags';
  manifestPrefix: string;
  names: string[];
  defaultName: string;
  nameArgLabel?: string;
  nameProp?: 'name' | 'countryCode';
  sizePresets: Record<string, SizePresetEntry>;
  defaultSize: string;
  reactExport: string;
  inlineCategory: string;
  reactIntro: ReactNode;
  renderModes?: RenderMode[];
  defaultRenderMode?: RenderMode;
  reactStoryDescription?: string;
  htmlIntro: ReactNode;
  defaultDecorative: boolean;
  defaultAriaLabel: string;
  angularComponent: string;
  angularSnippet: string;
  getHref: (name: string) => string;
}

export function createComponentStories(config: ComponentStoriesConfig) {
  const ReactShowcase = createReactAssetShowcase({
    assetCategory: config.assetCategory,
    inlineCategory: config.inlineCategory,
    reactExport: config.reactExport,
    nameProp: config.nameProp,
    sizePresets: config.sizePresets,
    intro: config.reactIntro,
    ExternalComponent: config.component as ComponentType<
      Record<string, unknown> & { className?: string }
    >,
  });

  const nameArgKey = config.nameProp ?? 'name';
  const renderModes = config.renderModes ?? (['use', 'img', 'inline'] satisfies RenderMode[]);
  const defaultRenderMode = config.defaultRenderMode ?? renderModes[0] ?? 'use';
  const htmlRenderModes = renderModes.filter((mode) => mode !== 'inline') as Array<
    Exclude<RenderMode, 'inline'>
  >;
  const defaultHtmlRenderMode =
    defaultRenderMode === 'inline' ? (htmlRenderModes[0] ?? 'use') : defaultRenderMode;

  const meta = {
    parameters: {
      docs: {
        description: { component: config.docsDescription },
      },
    },
    argTypes: {
      [nameArgKey]: {
        name: config.nameArgLabel ?? 'Asset',
        control: { type: 'select' },
        options: config.names,
      },
      ...sizePresetArgType(config.sizePresets),
      ...a11yArgTypes,
      baseUrl: { table: { disable: true } },
      versionTag: { table: { disable: true } },
    },
    args: {
      [nameArgKey]: config.defaultName,
      size: config.defaultSize,
      decorative: config.defaultDecorative,
      ariaLabel: config.defaultAriaLabel,
    },
    render: (args) => {
      const { size = config.defaultSize, ...rest } = args as Record<string, unknown> & {
        size?: string;
      };
      const className = config.sizePresets[size ?? config.defaultSize]?.className;
      return createElement(config.component, { ...rest, className } as Record<string, unknown>);
    },
  } satisfies Meta;

  const showcaseArgTypes = {
    [nameArgKey]: {
      name: config.nameArgLabel ?? 'Asset',
      control: { type: 'select' as const },
      options: config.names,
    },
    size: {
      name: 'Example size',
      control: { type: 'select' as const },
      options: Object.keys(config.sizePresets),
    },
    ...showcaseControlArgTypes,
    renderMode: {
      ...showcaseControlArgTypes.renderMode,
      options: renderModes,
    },
  };

  const showcaseArgs = {
    [nameArgKey]: config.defaultName,
    size: config.defaultSize,
    renderMode: defaultRenderMode,
    theme: 'light' as const,
    decorative: config.defaultDecorative,
    ariaLabel: config.defaultAriaLabel,
  };

  const React: StoryObj = {
    render: (args) => <ReactShowcase {...args} name={args[nameArgKey] as string} />,
    argTypes: showcaseArgTypes,
    args: showcaseArgs,
    parameters: {
      docs: {
        description: {
          story:
            config.reactStoryDescription ??
            'Interactive React example — external `<use href>` by default, inline for ATF.',
        },
      },
    },
  };

  const HTML: StoryObj = {
    render: (args) => (
      <WcAssetShowcase
        category={config.assetCategory}
        name={args[nameArgKey] as string}
        size={args.size as string}
        theme={args.theme as 'light' | 'dark'}
        decorative={args.decorative as boolean}
        ariaLabel={args.ariaLabel as string}
        sizePresets={config.sizePresets}
        intro={config.htmlIntro}
        renderMode={args.renderMode as Exclude<RenderMode, 'inline'>}
      />
    ),
    argTypes: {
      [nameArgKey]: showcaseArgTypes[nameArgKey],
      size: showcaseArgTypes.size,
      renderMode: {
        ...showcaseControlArgTypes.renderMode,
        options: htmlRenderModes,
      },
      theme: showcaseControlArgTypes.theme,
      decorative: showcaseControlArgTypes.decorative,
      ariaLabel: showcaseControlArgTypes.ariaLabel,
    },
    args: {
      [nameArgKey]: config.defaultName,
      size: config.defaultSize,
      renderMode: defaultHtmlRenderMode,
      theme: 'light',
      decorative: config.defaultDecorative,
      ariaLabel: config.defaultAriaLabel,
    },
    parameters: {
      docs: {
        description: {
          story: 'Web components — `<da-*>` custom elements from `@petrvocelka/design-assets-web-components`.',
        },
      },
    },
  };

  const Angular: StoryObj = {
    render: (args) => (
      <AngularAssetShowcase
        category={config.assetCategory}
        componentName={config.angularComponent}
        name={args[nameArgKey] as string}
        size={args.size as string}
        theme={args.theme as 'light' | 'dark'}
        decorative={args.decorative as boolean}
        ariaLabel={args.ariaLabel as string}
        sizePresets={config.sizePresets}
        intro={config.reactIntro}
        renderMode={args.renderMode as RenderMode}
      />
    ),
    argTypes: {
      [nameArgKey]: showcaseArgTypes[nameArgKey],
      size: showcaseArgTypes.size,
      renderMode: showcaseArgTypes.renderMode,
      theme: showcaseControlArgTypes.theme,
      decorative: showcaseControlArgTypes.decorative,
      ariaLabel: showcaseControlArgTypes.ariaLabel,
    },
    args: {
      [nameArgKey]: config.defaultName,
      size: config.defaultSize,
      renderMode: defaultRenderMode,
      theme: 'light',
      decorative: config.defaultDecorative,
      ariaLabel: config.defaultAriaLabel,
    },
    parameters: {
      docs: {
        description: {
          story: 'Typed Angular components from `@petrvocelka/design-assets-angular` — see `apps/demo-angular`.',
        },
      },
    },
  };

  return { metaFields: meta, React, HTML, Angular };
}

export {
  getIconHref,
  getPictogramHref,
  getIllustrationHref,
  getBrandAssetHref,
  getFlagHref,
};
