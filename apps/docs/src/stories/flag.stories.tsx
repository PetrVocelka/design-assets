import type { Meta, StoryObj } from '@storybook/react';
import type { CountryCode } from '@petrvocelka/design-assets-core';
import { Flag } from '@petrvocelka/design-assets-react';
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
      'Country flag from `flag-icons`. Prefer `img` for flags because they are self-contained colored assets. Use `inline` only for critical above-the-fold cases; reserve `use` for rare cases where you intentionally want SVG fragment rendering.',
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
        text. Prefer <code>img</code> for flags; they do not need <code>currentColor</code> styling.
        Inline flag exports exist for ATF demos, not for rendering the full flag catalog inline.
      </p>
    ),
    renderModes: ['img', 'inline', 'use'],
    defaultRenderMode: 'img',
    reactStoryDescription:
      'Interactive React example — `img` is the default for flags; inline is for ATF exceptions; `<use href>` is available but usually not the preferred flag mode.',
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
