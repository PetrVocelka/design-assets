import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@petrvocelka/design-assets-web-components/register',
        replacement: resolve(
          __dirname,
          '../../packages/web-components/src/register.ts',
        ),
      },
      {
        find: '@petrvocelka/design-assets-web-components',
        replacement: resolve(
          __dirname,
          '../../packages/web-components/src/index.ts',
        ),
      },
      {
        find: '@petrvocelka/design-assets-core/href',
        replacement: resolve(__dirname, '../../packages/core/src/href.ts'),
      },
      {
        find: '@petrvocelka/design-assets-core/manifest',
        replacement: resolve(__dirname, '../../packages/core/generated/manifest.ts'),
      },
      {
        find: '@petrvocelka/design-assets-core/names',
        replacement: resolve(__dirname, '../../packages/core/generated/names.ts'),
      },
      {
        find: '@petrvocelka/design-assets-core/version',
        replacement: resolve(__dirname, '../../packages/core/generated/version.ts'),
      },
      {
        find: '@petrvocelka/design-assets-core',
        replacement: resolve(__dirname, '../../packages/core/src/index.ts'),
      },
    ],
  },
  server: {
    port: 5174,
  },
});
