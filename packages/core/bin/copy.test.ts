import { mkdir, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { describe, expect, it, afterEach } from 'vitest';

import { runCopy } from '../bin/copy.js';

describe('design-assets copy CLI', () => {
  let tempDir: string;

  afterEach(async () => {
    if (tempDir) {
      await rm(tempDir, { recursive: true, force: true });
    }
  });

  it('copies svg files, manifest, and version.json', async () => {
    tempDir = await mkdtemp(join(tmpdir(), 'copy-cli-'));
    await runCopy({ destDir: tempDir });

    const icons = await readdir(join(tempDir, 'icons'));
    expect(icons.length).toBeGreaterThan(0);

    const manifest = JSON.parse(
      await readFile(join(tempDir, 'manifest.json'), 'utf8'),
    ) as unknown[];
    expect(manifest.length).toBeGreaterThan(0);

    const version = JSON.parse(
      await readFile(join(tempDir, 'version.json'), 'utf8'),
    ) as { version: string };
    expect(version.version).toMatch(/^\d+\.\d+\.\d+/);
  });

  it('copies only selected built-in categories', async () => {
    tempDir = await mkdtemp(join(tmpdir(), 'copy-cli-categories-'));
    await runCopy({
      destDir: tempDir,
      categories: ['icons', 'brand'],
    } as Parameters<typeof runCopy>[0] & { categories: string[] });

    await expect(readdir(join(tempDir, 'icons'))).resolves.toContain('square.svg');
    await expect(readdir(join(tempDir, 'brand'))).resolves.toContain('logo-mark.svg');
    await expect(readdir(join(tempDir, 'flags'))).rejects.toThrow();
    await expect(readdir(join(tempDir, 'pictograms'))).rejects.toThrow();
    await expect(readdir(join(tempDir, 'illustrations'))).rejects.toThrow();
  });

  it('removes stale files from copied category directories', async () => {
    tempDir = await mkdtemp(join(tmpdir(), 'copy-cli-stale-'));
    await mkdir(join(tempDir, 'icons'), { recursive: true });
    await writeFile(join(tempDir, 'icons', 'old-icon.svg'), '<svg></svg>');

    await runCopy({
      destDir: tempDir,
      categories: ['icons'],
    } as Parameters<typeof runCopy>[0] & { categories: string[] });

    const icons = await readdir(join(tempDir, 'icons'));
    expect(icons).toContain('square.svg');
    expect(icons).not.toContain('old-icon.svg');
  });
});
