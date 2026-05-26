import type { Meta, StoryObj } from '@storybook/react';
import { Illustration } from '@petrvocelka/design-assets-react';
import { createComponentStories, getIllustrationHref } from './create-component-stories';
import { ILLUSTRATION_SIZE_PRESETS, manifestNames } from './story-helpers';
import { ThemedAssetExample } from './themed-asset-example';

const { metaFields, React: ReactExample, HTML: HTMLExample, Angular: AngularExample } =
  createComponentStories({
    title: 'Illustration',
    component: Illustration,
    docsDescription:
      'Custom asset group demo for spot illustrations. These examples show how colored SVG groups can stay dimensionless, support CSS variable theming, and provide accessibility labels when they convey meaning.',
    assetCategory: 'illustrations',
    manifestPrefix: 'illustrations',
    names: manifestNames('illustrations'),
    defaultName: 'empty-state',
    nameArgLabel: 'Illustration',
    sizePresets: ILLUSTRATION_SIZE_PRESETS,
    defaultSize: 'md',
    reactExport: 'Illustration',
    inlineCategory: 'illustrations',
    reactIntro: (
      <p className="text-sm text-slate-600">
        Illustrations are a custom asset group demo. They often need <code>ariaLabel</code> when
        they carry meaning (empty states, errors). Size examples here are documentation-only. Use
        the background control to preview CSS variable theming.
      </p>
    ),
    htmlIntro: (
      <p className="text-sm text-slate-600">
        Framework-agnostic HTML with <code>&lt;use href&gt;</code> for a custom group concept — set{' '}
        <code>role="img"</code> and <code>aria-label</code> when not decorative.
      </p>
    ),
    defaultDecorative: false,
    defaultAriaLabel: 'No results found',
    angularComponent: 'IllustrationComponent',
    angularSnippet: `<design-asset-illustration
  name="empty-state"
  ariaLabel="No results found"
/>`,
    getHref: getIllustrationHref,
  });

export default {
  title: 'Components/Illustration',
  component: Illustration,
  tags: ['autodocs'],
  ...metaFields,
} satisfies Meta<typeof Illustration>;

export const React: StoryObj<typeof Illustration> = ReactExample;
export const HTML: StoryObj = HTMLExample;
export const Angular: StoryObj = AngularExample;
export const ThemeVariables: StoryObj = {
  render: () => (
    <ThemedAssetExample
      description={
        <>
          Illustrations demonstrate the same custom-group theming model as pictograms. Product
          teams can map these variables to their own light/dark tokens while the asset package
          stays framework- and styling-agnostic.
        </>
      }
      renderAsset={() => (
        <Illustration name="empty-state" ariaLabel="No results found" className="h-32 w-auto" />
      )}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Light/dark illustration theming through CSS custom properties.',
      },
    },
  },
};
