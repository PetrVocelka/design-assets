import type { StorybookConfig } from '@storybook/react-vite';
import { resolve } from 'node:path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-docs'],
  framework: '@storybook/react-vite',
  viteFinal: async (config) => {
    config.resolve ??= {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@petrvocelka/design-assets-core/generated': resolve(
        __dirname,
        '../../../packages/core/generated',
      ),
      '@petrvocelka/design-assets-core/href': resolve(__dirname, '../../../packages/core/src/href.ts'),
      '@petrvocelka/design-assets-core/manifest': resolve(
        __dirname,
        '../../../packages/core/generated/manifest.ts',
      ),
      '@petrvocelka/design-assets-core/names': resolve(
        __dirname,
        '../../../packages/core/generated/names.ts',
      ),
      '@petrvocelka/design-assets-core/version': resolve(
        __dirname,
        '../../../packages/core/generated/version.ts',
      ),
      '@petrvocelka/design-assets-react/inline': resolve(
        __dirname,
        '../../../packages/react/generated/inline/index.ts',
      ),
      '@petrvocelka/design-assets-react': resolve(
        __dirname,
        '../../../packages/react/src/index.ts',
      ),
      '@petrvocelka/design-assets-core': resolve(
        __dirname,
        '../../../packages/core/src/index.ts',
      ),
      '@petrvocelka/design-assets-web-components/register': resolve(
        __dirname,
        '../../../packages/web-components/dist/register.js',
      ),
      '@petrvocelka/design-assets-web-components': resolve(
        __dirname,
        '../../../packages/web-components/dist/index.js',
      ),
    };
    return config;
  },
};

export default config;
