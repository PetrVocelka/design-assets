import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    register: 'src/register.ts',
  },
  format: ['esm'],
  dts: true,
  clean: true,
  external: ['@design-assets/core', 'lit'],
});
