import type { Meta, StoryObj } from '@storybook/react';
import type { CountryCode } from '@design-assets/core';
import { Flag } from '@design-assets/react';
import { createComponentStories, getFlagHref } from './create-component-stories';
import { FLAG_SIZE_PRESETS, manifestNames } from './story-helpers';

const FLAG_LABELS: Record<CountryCode, string> = {
  br: 'Brazil',
  cz: 'Czech Republic',
  de: 'Germany',
  us: 'United States',
};

const { metaFields, React: ReactExample, HTML: HTMLExample, Angular: AngularExample } =
  createComponentStories({
    title: 'Flag',
    component: Flag,
    docsDescription:
      'Country flag from `flag-icons`. Include `ariaLabel` with the country name when not redundant with adjacent text. Keep large flag catalogs in external-file mode so pages fetch only the flags they render.',
    assetCategory: 'flags',
    manifestPrefix: 'flags',
    names: manifestNames('flags'),
    defaultName: 'cz',
    nameArgLabel: 'Country',
    nameProp: 'countryCode',
    sizePresets: FLAG_SIZE_PRESETS,
    defaultSize: 'md',
    reactExport: 'Flag',
    inlineCategory: 'flags',
    reactIntro: (
      <p className="text-sm text-slate-600">
        Flags should include a country name via <code>ariaLabel</code> when shown without adjacent
        text. Size examples here are documentation-only. Inline flag exports exist for ATF demos,
        not for rendering the full flag catalog inline.
      </p>
    ),
    htmlIntro: (
      <p className="text-sm text-slate-600">
        Flags use a fixed aspect ratio. Apply that ratio in your product CSS or wrapper component.
      </p>
    ),
    defaultDecorative: false,
    defaultAriaLabel: FLAG_LABELS.cz,
    angularComponent: 'FlagComponent',
    angularSnippet: `<design-asset-flag countryCode="cz" ariaLabel="Czech Republic" />`,
    getHref: (code) => getFlagHref(code as CountryCode),
  });

export default {
  title: 'Components/Flag',
  component: Flag,
  tags: ['autodocs'],
  ...metaFields,
} satisfies Meta<typeof Flag>;

export const React: StoryObj<typeof Flag> = ReactExample;
export const HTML: StoryObj = HTMLExample;
export const Angular: StoryObj = AngularExample;
