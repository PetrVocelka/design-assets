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
