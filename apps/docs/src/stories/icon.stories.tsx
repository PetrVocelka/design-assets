import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@design-assets/react';
import { ICON_SIZE_PRESETS } from '@design-assets/tailwind-preset/icon-sizes';
import { createComponentStories, getIconHref } from './create-component-stories';
import { manifestNames } from './story-helpers';

const { metaFields, React: ReactExample, HTML: HTMLExample, Angular: AngularExample } =
  createComponentStories({
  title: 'Icon',
  component: Icon,
  docsDescription:
    'External-file icon via `<use href>`. Dimensionless by default; pass your own class or wrapper for size. Decorative by default — pass `ariaLabel` when the icon is the only content of a control.',
  assetCategory: 'icons',
  manifestPrefix: 'icons',
  names: manifestNames('icons'),
  defaultName: 'square',
  nameArgLabel: 'Icon',
  sizePresets: ICON_SIZE_PRESETS,
  defaultSize: 'lg',
  reactExport: 'Icon',
  inlineCategory: 'icons',
  reactIntro: (
    <p className="text-sm text-slate-600">
      Icons are decorative by default. Pass <code>ariaLabel</code> inside a lone{' '}
      <code>&lt;button&gt;</code>. Use external-file by default; inline only for ATF-critical
      spots. Size examples here are documentation-only.
    </p>
  ),
  htmlIntro: (
    <p className="text-sm text-slate-600">
      No framework required — copy SVG files to <code>public/design-assets/</code> and reference
      them with <code>&lt;use href&gt;</code>.
    </p>
  ),
  defaultDecorative: true,
  defaultAriaLabel: 'Example shape',
  angularComponent: 'IconComponent',
  angularSnippet: `import { IconComponent } from '@design-assets/angular';

@Component({
  imports: [IconComponent],
  template: \`<design-asset-icon name="square" />\`,
})
export class ShapeExample {}`,
  getHref: getIconHref,
});

export default {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  ...metaFields,
} satisfies Meta<typeof Icon>;

export const React: StoryObj<typeof Icon> = ReactExample;
export const HTML: StoryObj = HTMLExample;
export const Angular: StoryObj = AngularExample;
