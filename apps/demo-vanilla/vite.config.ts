import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@design-assets/web-components/register',
        replacement: resolve(
          __dirname,
          '../../packages/web-components/src/register.ts',
        ),
      },
      {
        find: '@design-assets/web-components',
        replacement: resolve(
          __dirname,
          '../../packages/web-components/src/index.ts',
        ),
      },
      {
        find: '@design-assets/core',
        replacement: resolve(__dirname, '../../packages/core/src/index.ts'),
      },
    ],
  },
  server: {
    port: 5174,
  },
});
