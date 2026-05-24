import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

export default defineConfig({
  test: {
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@design-assets/core': resolve(__dirname, '../core/src/index.ts'),
    },
  },
});
