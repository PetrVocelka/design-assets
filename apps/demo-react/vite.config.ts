import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@design-assets/core/generated': resolve(
        __dirname,
        '../../packages/core/generated',
      ),
      '@design-assets/core/href': resolve(__dirname, '../../packages/core/src/href.ts'),
      '@design-assets/core/manifest': resolve(
        __dirname,
        '../../packages/core/generated/manifest.ts',
      ),
      '@design-assets/core/names': resolve(
        __dirname,
        '../../packages/core/generated/names.ts',
      ),
      '@design-assets/core/version': resolve(
        __dirname,
        '../../packages/core/generated/version.ts',
      ),
      '@design-assets/react/inline': resolve(
        __dirname,
        '../../packages/react/generated/inline/index.ts',
      ),
      '@design-assets/react': resolve(
        __dirname,
        '../../packages/react/src/index.ts',
      ),
      '@design-assets/core': resolve(
        __dirname,
        '../../packages/core/src/index.ts',
      ),
    },
  },
  server: {
    port: 5173,
  },
});
