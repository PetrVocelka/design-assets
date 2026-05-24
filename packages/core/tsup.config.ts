import { readdirSync } from 'node:fs';
import { join, sep } from 'node:path';
import { defineConfig } from 'tsup';

function collectGeneratedInlineEntries(
  dir = join('generated', 'inline'),
): Record<string, string> {
  const entries: Record<string, string> = {};

  for (const dirent of readdirSync(dir, { withFileTypes: true })) {
    const filePath = join(dir, dirent.name);

    if (dirent.isDirectory()) {
      Object.assign(entries, collectGeneratedInlineEntries(filePath));
      continue;
    }

    if (!dirent.name.endsWith('.ts')) {
      continue;
    }

    const entryName = filePath.replace(/\.ts$/, '').split(sep).join('/');
    entries[entryName] = filePath;
  }

  return entries;
}

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'bin/copy': 'bin/copy.ts',
    manifest: 'generated/manifest.ts',
    version: 'generated/version.ts',
    ...collectGeneratedInlineEntries(),
  },
  format: ['esm'],
  dts: true,
  clean: true,
});
