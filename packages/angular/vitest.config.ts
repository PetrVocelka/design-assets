import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

export default defineConfig({
  test: {
    environment: 'node',
  },
  resolve: {
    alias: {
      '@petrvocelka/design-assets-core/href': resolve(__dirname, '../core/src/href.ts'),
      '@petrvocelka/design-assets-core/names': resolve(__dirname, '../core/generated/names.ts'),
      '@petrvocelka/design-assets-core/version': resolve(__dirname, '../core/generated/version.ts'),
      '@petrvocelka/design-assets-core': resolve(__dirname, '../core/src/index.ts'),
    },
  },
});
