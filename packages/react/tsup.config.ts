import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'inline/index': 'generated/inline/index.ts',
  },
  format: ['esm'],
  dts: true,
  clean: true,
  external: ['react', '@design-assets/core'],
  esbuildOptions(options) {
    options.jsx = 'automatic';
  },
});
