import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

export default defineConfig({
  test: {
    environment: 'node',
  },
  resolve: {
    alias: {
      '@design-assets/core/href': resolve(__dirname, '../core/src/href.ts'),
      '@design-assets/core/names': resolve(__dirname, '../core/generated/names.ts'),
      '@design-assets/core/version': resolve(__dirname, '../core/generated/version.ts'),
      '@design-assets/core': resolve(__dirname, '../core/src/index.ts'),
    },
  },
});
