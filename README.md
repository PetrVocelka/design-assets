# Design Assets

Portable, type-safe design asset infrastructure for large product teams. This is not only an icon package: it combines generated SVG assets, metadata, framework adapters, copy/deployment recipes, Storybook documentation, validation, and release governance.

The default delivery mode is per-asset static SVG files rendered through `<use href="/design-assets/icons/square.svg?v=0.1.0#asset" />`. That keeps SVG path data out of JavaScript, preserves `currentColor`, avoids DOM duplication, and works well for SSG/prerendered apps with thousands of pages.

## Quick Start

Install the consumer packages:

```bash
yarn add @design-assets/core @design-assets/react
```

Copy generated assets into your app's public directory:

```bash
yarn design-assets copy ./public/design-assets
```

Render assets with the React adapter:

```tsx
import { DesignAssetsProvider, Icon, Flag } from '@design-assets/react';

export function App() {
  return (
    <DesignAssetsProvider baseUrl="/design-assets">
      <Icon name="square" decorative />
      <Flag countryCode="cz" ariaLabel="Czech Republic" />
    </DesignAssetsProvider>
  );
}
```

The runtime packages do not depend on Tailwind or ship default sizes. Add sizing through your app's CSS, design tokens, Tailwind utilities, or a wrapper component. See [`docs/sizing.md`](docs/sizing.md) and [`docs/consumer-setup.md`](docs/consumer-setup.md).

## Packages

| Package | Purpose |
| --- | --- |
| `@design-assets/core` | Generated manifest, names, version, SVG files, href helpers, and `design-assets copy` CLI. |
| `@design-assets/react` | React external-file components plus `@design-assets/react/inline` for above-the-fold assets. |
| `@design-assets/angular` | Angular standalone external-file components. |
| `@design-assets/web-components` | Framework-agnostic custom elements and `@design-assets/web-components/register`. |

`packages/tailwind-preset` is a private docs/demo helper in this case study. It is not required by the runtime packages and should not be treated as part of the consumer contract.

The stable v1 asset contract is intentionally small: `icons`, `brand`, and `flags`. `pictograms` and `illustrations` remain in the repository as demo custom groups that show how colored SVG groups, CSS-variable themes, and Storybook documentation could work in a company-specific extension.

Stable public imports:

```tsx
import { Icon } from '@design-assets/react';
import { SquareIcon } from '@design-assets/react/inline';
import { manifest } from '@design-assets/core/manifest';
```

Do not import raw internal source files from `src/` or unversioned asset paths. Use package exports so the manifest, versioning, accessibility rules, and generated `viewBox` data stay in sync.

## Delivery Modes

External-file mode is the default:

```html
<svg viewBox="0 0 24 24" class="size-5 text-blue-600" aria-hidden="true">
  <use href="/design-assets/icons/square.svg?v=0.1.0#asset"></use>
</svg>
```

The generated wrapper has no built-in `width` or `height`; the `class` above is consumer-owned styling.

Inline mode is available for critical above-the-fold assets:

```tsx
import { LogoMark } from '@design-assets/react/inline';

<LogoMark ariaLabel="Design Assets" className="h-6 w-auto" />;
```

Use inline sparingly because it duplicates SVG markup in the DOM on every render.
Even though generated inline exports exist for every category in this case study, treat them as an ATF escape hatch. Large catalogs such as the full flag set should normally stay in external-file mode and be cached by the browser per SVG file.

## Optional Categories

Consumers can copy only the built-in asset categories they need:

```bash
yarn design-assets copy ./public/design-assets --categories icons,brand
```

Web Components can also register only selected element categories:

```ts
import { defineDesignAssetsElements } from '@design-assets/web-components/register';

defineDesignAssetsElements({ categories: ['icons', 'brand'] });
```

See [`docs/optional-categories.md`](docs/optional-categories.md) for adapter and manifest details. `pictograms` and `illustrations` are demo custom groups; arbitrary company-defined groups are documented as a v2 extension in [`docs/custom-asset-groups.md`](docs/custom-asset-groups.md).

## Custom Asset Hrefs

Consumers can override where assets resolve without forking the package. This is useful for app-owned flags, a brand-specific CDN path, or a gradual migration from an existing icon host:

```tsx
<DesignAssetsProvider
  baseUrl="/design-assets"
  resolveHref={({ category, name, defaultHref }) =>
    category === 'flags' ? `/local-flags/${name}.svg#asset` : defaultHref
  }
>
  <Flag countryCode="cz" ariaLabel="Czech Republic" />
</DesignAssetsProvider>
```

The override must still return an SVG URL with a compatible `#asset` fragment unless the consumer adapter intentionally changes that contract.

## Deployment

Same-origin copy is the recommended deployment model:

- copy assets to `public/design-assets`
- serve them from `/design-assets`
- keep `versionTag` enabled so URLs become `file.svg?v=<package-version>#asset`

Deployment guides:

- [`docs/deployment/cloudflare-pages.md`](docs/deployment/cloudflare-pages.md): default Cloudflare Pages same-origin recipe.
- [`docs/deployment/cloudflare-r2-cdn.md`](docs/deployment/cloudflare-r2-cdn.md): advanced versioned R2/CDN recipe.

## Publishing

Use Changesets and GitHub Packages for versioned releases:

```bash
yarn changeset
yarn changeset version
yarn generate
yarn validate
yarn lint
yarn typecheck
yarn test
yarn test:e2e
yarn build
yarn changeset publish
```

See [`docs/publishing/github-packages.md`](docs/publishing/github-packages.md) for `.npmrc`, token, and GitHub Actions guidance.

## Storybook

`apps/docs` is the canonical living catalog for asset usage, accessibility rules, metadata, and platform examples.

```bash
yarn storybook
```

See [`docs/storybook-import.md`](docs/storybook-import.md) for the intended consumer Storybook import strategy.

## Architecture

The repository is a Yarn/Turborepo workspace:

| Path | Purpose |
| --- | --- |
| `packages/core` | Stable built-in assets (`icons`, `brand`, `flags`), demo custom groups, generation, validation, manifest, href helpers, and copy CLI. |
| `packages/react` | React adapter and generated inline React components. |
| `packages/angular` | Angular standalone components. |
| `packages/web-components` | Custom elements for HTML and framework-agnostic demos. |
| `apps/demo-react` | React playground and storage-at-scale measurements. |
| `apps/demo-angular` | Angular adapter demo. |
| `apps/demo-vanilla` | Static HTML and web components demo. |
| `apps/docs` | Storybook docs and asset catalog. |

## Governance

Assets follow an explicit lifecycle: add, live, deprecate, then coordinated removal only in a major release. Assets are never silently deleted or renamed.

Designer workflow is documented in [`packages/core/figma-presets.md`](packages/core/figma-presets.md), including the recommended Figma SVG Export plugin preset for `currentColor`-ready SVGs.

Raster images, complex marketing media, CMS images, and DAM workflows are intentionally out of scope. They belong in a dedicated media service.

## Verification

Run the full local gate before publishing:

```bash
yarn generate
yarn validate
yarn lint
yarn typecheck
yarn test
yarn test:e2e
yarn build
```

## Future Work

Planned extension points include first-class custom asset group configuration, React Native/native mobile pipelines, deprecated-asset ESLint rules, stricter CDN smoke tests, `icons-solid` sibling categories, and a full media library for raster or complex visual assets.
