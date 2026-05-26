import type { StorybookConfig } from '@storybook/react-vite';
import { resolve } from 'node:path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-docs'],
  framework: '@storybook/react-vite',
  staticDirs: ['../public'],
  viteFinal: async (config) => {
    config.resolve ??= {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@design-assets/core/generated': resolve(
        __dirname,
        '../../../packages/core/generated',
      ),
      '@design-assets/core/href': resolve(__dirname, '../../../packages/core/src/href.ts'),
      '@design-assets/core/manifest': resolve(
        __dirname,
        '../../../packages/core/generated/manifest.ts',
      ),
      '@design-assets/core/names': resolve(
        __dirname,
        '../../../packages/core/generated/names.ts',
      ),
      '@design-assets/core/version': resolve(
        __dirname,
        '../../../packages/core/generated/version.ts',
      ),
      '@design-assets/react/inline': resolve(
        __dirname,
        '../../../packages/react/generated/inline/index.ts',
      ),
      '@design-assets/react': resolve(
        __dirname,
        '../../../packages/react/src/index.ts',
      ),
      '@design-assets/core': resolve(
        __dirname,
        '../../../packages/core/src/index.ts',
      ),
      '@design-assets/web-components/register': resolve(
        __dirname,
        '../../../packages/web-components/dist/register.js',
      ),
      '@design-assets/web-components': resolve(
        __dirname,
        '../../../packages/web-components/dist/index.js',
      ),
    };
    return config;
  },
};

export default config;
