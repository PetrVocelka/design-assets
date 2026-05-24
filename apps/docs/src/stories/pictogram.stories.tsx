import type { Meta, StoryObj } from '@storybook/react';
import { Pictogram } from '@design-assets/react';
import { createComponentStories, getPictogramHref } from './create-component-stories';
import { manifestNames, PICTOGRAM_SIZE_PRESETS } from './story-helpers';
import { ThemedAssetExample } from './themed-asset-example';

const { metaFields, React: ReactExample, HTML: HTMLExample, Angular: AngularExample } =
  createComponentStories({
    title: 'Pictogram',
    component: Pictogram,
    docsDescription:
      'Custom asset group demo loaded from external SVG files. Pictograms are kept in this case study to demonstrate colored, CSS-variable assets; the core v1 product contract is icons, brand, and flags.',
    assetCategory: 'pictograms',
    manifestPrefix: 'pictograms',
    names: manifestNames('pictograms'),
    defaultName: 'school',
    nameArgLabel: 'Pictogram',
    sizePresets: PICTOGRAM_SIZE_PRESETS,
    defaultSize: 'md',
    reactExport: 'Pictogram',
    inlineCategory: 'pictograms',
    reactIntro: (
      <p className="text-sm text-slate-600">
        Pictograms are a custom asset group demo. External-file by default; inline only when needed
        above the fold. Size examples here are documentation-only. Use the background control to
        preview how a future custom group can support CSS variable theming.
      </p>
    ),
    htmlIntro: (
      <p className="text-sm text-slate-600">
        Same <code>&lt;use href&gt;</code> pattern as the built-in categories — shown here as a
        custom group concept that works in any stack that can render HTML.
      </p>
    ),
    defaultDecorative: true,
    defaultAriaLabel: 'School',
    angularComponent: 'PictogramComponent',
    angularSnippet: `<da-ng-pictogram name="school" />`,
    getHref: getPictogramHref,
  });

export default {
  title: 'Components/Pictogram',
  component: Pictogram,
  tags: ['autodocs'],
  ...metaFields,
} satisfies Meta<typeof Pictogram>;

export const React: StoryObj<typeof Pictogram> = ReactExample;
export const HTML: StoryObj = HTMLExample;
export const Angular: StoryObj = AngularExample;
export const ThemeVariables: StoryObj = {
  render: () => (
    <ThemedAssetExample
      description={
        <>
          Pictograms demonstrate how a custom asset group can use semantic CSS variables with
          fallback colors. Set variables on a wrapper, theme class, or the SVG itself to support
          light/dark product themes without duplicating asset files.
        </>
      }
      renderAsset={() => <Pictogram name="school" decorative className="size-24" />}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Light/dark pictogram theming through CSS custom properties.',
      },
    },
  },
};
