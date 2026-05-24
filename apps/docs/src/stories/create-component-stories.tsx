import { createElement, type ComponentType, type ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  getBrandAssetHref,
  getFlagHref,
  getIconHref,
  getIllustrationHref,
  getPictogramHref,
} from '@design-assets/core';
import { AngularAssetShowcase } from '../showcase/angular-asset-showcase';
import { WcAssetShowcase } from '../showcase/wc-asset-showcase';
import { createReactAssetShowcase } from '../showcase/react-asset-showcase';
import { showcaseControlArgTypes } from '../showcase/showcase-shell';
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
  htmlIntro: ReactNode;
  defaultDecorative: boolean;
  defaultAriaLabel: string;
  angularComponent: string;
  angularSnippet: string;
  getHref: (name: string) => string;
}

export function createComponentStories(config: ComponentStoriesConfig) {
  const ReactShowcase = createReactAssetShowcase({
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
  };

  const showcaseArgs = {
    [nameArgKey]: config.defaultName,
    size: config.defaultSize,
    renderMode: 'external' as const,
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
          story: 'Interactive React example — external `<use href>` by default, inline for ATF.',
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
      />
    ),
    argTypes: {
      [nameArgKey]: showcaseArgTypes[nameArgKey],
      size: showcaseArgTypes.size,
      theme: showcaseControlArgTypes.theme,
      decorative: showcaseControlArgTypes.decorative,
      ariaLabel: showcaseControlArgTypes.ariaLabel,
    },
    args: {
      [nameArgKey]: config.defaultName,
      size: config.defaultSize,
      theme: 'light',
      decorative: config.defaultDecorative,
      ariaLabel: config.defaultAriaLabel,
    },
    parameters: {
      docs: {
        description: {
          story: 'Web components — `<da-*>` custom elements from `@design-assets/web-components`.',
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
      />
    ),
    argTypes: {
      [nameArgKey]: showcaseArgTypes[nameArgKey],
      size: showcaseArgTypes.size,
      theme: showcaseControlArgTypes.theme,
      decorative: showcaseControlArgTypes.decorative,
      ariaLabel: showcaseControlArgTypes.ariaLabel,
    },
    args: {
      [nameArgKey]: config.defaultName,
      size: config.defaultSize,
      theme: 'light',
      decorative: config.defaultDecorative,
      ariaLabel: config.defaultAriaLabel,
    },
    parameters: {
      docs: {
        description: {
          story: 'Typed Angular components from `@design-assets/angular` — see `apps/demo-angular`.',
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
