import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@petrvocelka/design-assets-core/generated': resolve(
        __dirname,
        '../../packages/core/generated',
      ),
      '@petrvocelka/design-assets-core/href': resolve(__dirname, '../../packages/core/src/href.ts'),
      '@petrvocelka/design-assets-core/manifest': resolve(
        __dirname,
        '../../packages/core/generated/manifest.ts',
      ),
      '@petrvocelka/design-assets-core/names': resolve(
        __dirname,
        '../../packages/core/generated/names.ts',
      ),
      '@petrvocelka/design-assets-core/version': resolve(
        __dirname,
        '../../packages/core/generated/version.ts',
      ),
      '@petrvocelka/design-assets-react/inline': resolve(
        __dirname,
        '../../packages/react/generated/inline/index.ts',
      ),
      '@petrvocelka/design-assets-react': resolve(
        __dirname,
        '../../packages/react/src/index.ts',
      ),
      '@petrvocelka/design-assets-core': resolve(
        __dirname,
        '../../packages/core/src/index.ts',
      ),
    },
  },
  server: {
    port: 5173,
  },
});
