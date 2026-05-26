import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = dirname(fileURLToPath(new URL('../package.json', import.meta.url)));
const pagesDir = join(rootDir, 'pages-dist');

const reactDistDir = join(rootDir, 'apps/demo-react/dist');
const storybookDistDir = join(rootDir, 'apps/docs/storybook-static');

async function copyRequiredDirectory(source, target) {
  await cp(source, target, { recursive: true });
}

function landingPage() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Design Assets</title>
    <meta
      name="description"
      content="Typed, vendor-neutral SVG asset infrastructure with React, Angular, and Web Component renderers."
    />
    <style>
      :root {
        color-scheme: light dark;
        --background: #f8fafc;
        --foreground: #0f172a;
        --muted: #475569;
        --card: #ffffff;
        --border: #e2e8f0;
        --accent: #2563eb;
      }

      @media (prefers-color-scheme: dark) {
        :root {
          --background: #020617;
          --foreground: #e2e8f0;
          --muted: #94a3b8;
          --card: #0f172a;
          --border: #1e293b;
          --accent: #60a5fa;
        }
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        min-height: 100vh;
        background:
          radial-gradient(circle at top left, color-mix(in srgb, var(--accent) 20%, transparent), transparent 34rem),
          var(--background);
        color: var(--foreground);
        font-family:
          Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }

      main {
        width: min(68rem, calc(100% - 2rem));
        margin: 0 auto;
        padding: 6rem 0;
      }

      .eyebrow {
        color: var(--accent);
        font-size: 0.875rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }

      h1 {
        max-width: 48rem;
        margin: 1rem 0;
        font-size: clamp(2.75rem, 8vw, 5.5rem);
        line-height: 0.95;
        letter-spacing: -0.06em;
      }

      .intro {
        max-width: 42rem;
        margin: 0;
        color: var(--muted);
        font-size: 1.25rem;
        line-height: 1.75;
      }

      .cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
        gap: 1rem;
        margin-top: 3rem;
      }

      .card {
        display: flex;
        min-height: 12rem;
        flex-direction: column;
        justify-content: space-between;
        gap: 2rem;
        border: 1px solid var(--border);
        border-radius: 1.5rem;
        background: color-mix(in srgb, var(--card) 88%, transparent);
        padding: 1.5rem;
        text-decoration: none;
        box-shadow: 0 1.5rem 5rem color-mix(in srgb, #020617 10%, transparent);
      }

      .card strong {
        display: block;
        color: var(--foreground);
        font-size: 1.5rem;
        letter-spacing: -0.03em;
      }

      .card span {
        display: block;
        margin-top: 0.5rem;
        color: var(--muted);
        line-height: 1.6;
      }

      .card em {
        color: var(--accent);
        font-style: normal;
        font-weight: 700;
      }

      .note {
        max-width: 46rem;
        margin-top: 2rem;
        color: var(--muted);
        line-height: 1.7;
      }
    </style>
  </head>
  <body>
    <main>
      <p class="eyebrow">Design Assets</p>
      <h1>Typed SVG assets for product teams.</h1>
      <p class="intro">
        A vendor-neutral asset pipeline with generated package APIs, framework adapters,
        inline escape hatches, and cacheable external SVG delivery.
      </p>

      <div class="cards" aria-label="Live demos">
        <a class="card" href="./react/">
          <span>
            <strong>React Demo</strong>
            <span>A live app showing the package in a real framework integration.</span>
          </span>
          <em>Open /react/</em>
        </a>
        <a class="card" href="./storybook/">
          <span>
            <strong>Storybook</strong>
            <span>The canonical catalog for generated assets, render modes, and usage examples.</span>
          </span>
          <em>Open /storybook/</em>
        </a>
      </div>

      <p class="note">
        Angular and Web Components demos live in the monorepo and are planned as follow-up
        public demo surfaces. This first Pages slice keeps the hosted showcase focused on
        the landing page, React proof-of-use app, and Storybook documentation.
      </p>
    </main>
  </body>
</html>
`;
}

await rm(pagesDir, { recursive: true, force: true });
await mkdir(pagesDir, { recursive: true });
await copyRequiredDirectory(reactDistDir, join(pagesDir, 'react'));
await copyRequiredDirectory(storybookDistDir, join(pagesDir, 'storybook'));
await writeFile(join(pagesDir, 'index.html'), landingPage());

