import type { Meta, StoryObj } from '@storybook/react';
import { BrandAsset } from '@petrvocelka/design-assets-react';
import { createComponentStories, getBrandAssetHref } from './create-component-stories';
import { BRAND_SIZE_PRESETS, manifestNames } from './story-helpers';
import { ThemedAssetExample } from './themed-asset-example';

const { metaFields, React: ReactExample, HTML: HTMLExample, Angular: AngularExample } =
  createComponentStories({
    title: 'BrandAsset',
    component: BrandAsset,
    docsDescription:
      'Logo mark asset. This demo mark illustrates the brand pipeline; consumers own the final visual identity, rendered size, aspect-ratio rules, and light/dark brand variable mapping.',
    assetCategory: 'brand',
    manifestPrefix: 'brand',
    names: manifestNames('brand'),
    defaultName: 'logo-mark',
    nameArgLabel: 'Brand asset',
    sizePresets: BRAND_SIZE_PRESETS,
    defaultSize: 'md',
    reactExport: 'BrandAsset',
    inlineCategory: 'brand',
    reactIntro: (
      <p className="text-sm text-slate-600">
        Brand marks should usually be labelled. Use inline for above-the-fold header branding.
        This mark is intentionally simple so the example focuses on the asset pipeline, not a final
        identity system.
      </p>
    ),
    htmlIntro: (
      <p className="text-sm text-slate-600">
        Brand SVGs use the same external-file pattern. Preserve aspect ratio in your product CSS
        or wrapper component.
      </p>
    ),
    defaultDecorative: false,
    defaultAriaLabel: 'Design Assets',
    angularComponent: 'BrandAssetComponent',
    angularSnippet: `<design-asset-brand name="logo-mark" ariaLabel="Design Assets" />`,
    getHref: getBrandAssetHref,
  });

export default {
  title: 'Components/BrandAsset',
  component: BrandAsset,
  tags: ['autodocs'],
  ...metaFields,
} satisfies Meta<typeof BrandAsset>;

export const React: StoryObj<typeof BrandAsset> = ReactExample;
export const HTML: StoryObj = HTMLExample;
export const Angular: StoryObj = AngularExample;
export const ThemeVariables: StoryObj = {
  render: () => (
    <ThemedAssetExample
      description={
        <>
          Brand examples use dedicated variables such as <code>--da-brand-mark-background</code>,{' '}
          <code>--da-brand-mark-primary</code>, and <code>--da-brand-mark-foreground</code>. A real
          product would map these to its own brand tokens.
        </>
      }
      renderAsset={() => (
        <BrandAsset name="logo-mark" ariaLabel="Design Assets" className="h-12 w-auto" />
      )}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Light/dark brand asset theming through CSS custom properties.',
      },
    },
  },
};
