# Design Assets

Vendor-neutral SVG asset pipeline that generates typed assets, Angular/React renderers, critical inline icons, versioned external URLs, and Storybook docs.

Design Assets turns your own SVG files into a small design-system asset surface: typed names, generated public SVG files, framework adapters, inline escape hatches, validation, and a living Storybook catalog. Product code stays independent of any icon vendor while still getting predictable rendering and cache-busting behavior.

This is a public case-study library and release-engineering playground, not a v1 stability promise.

The default delivery mode is per-asset static SVG files rendered through `<use href="/design-assets/icons/square.svg?v=0.1.0#asset" />`. That keeps SVG path data out of JavaScript, preserves `currentColor`, avoids DOM duplication, and works well for SSG/prerendered apps with many pages.

## Live Demo

- [Landing page](https://petrvocelka.github.io/design-assets/) explains the package surface.
- [React demo](https://petrvocelka.github.io/design-assets/react/) shows a live framework integration.
- [Storybook](https://petrvocelka.github.io/design-assets/storybook/) is the canonical catalog for assets, render modes, and usage examples.

Storybook is the documentation source of truth. The framework demos are proof-of-use apps that show how the same generated assets behave in real application builds. Angular and Web Components demos live in this monorepo and are follow-up targets for the public Pages surface.

## Why

- Typed asset names instead of fragile string paths.
- Vendor-neutral source pipeline: bring your own SVGs and validation rules.
- Angular, React, and Web Component renderers from the same asset source.
- Inline rendering for critical UI chrome where zero extra requests matter.
- External `use` and `img` rendering for repeatable, cacheable non-critical assets.
- Versioned external URLs without prescribing a specific hosting or CDN provider.
- Storybook docs that double as the visual asset catalog.

## Quick Start

Install the consumer packages:

```bash
yarn add @petrvocelka/design-assets-core @petrvocelka/design-assets-react
```

Copy generated assets into your app's public directory:

```bash
yarn design-assets copy ./public/design-assets
```

Render assets with the React adapter:

```tsx
import { DesignAssetsProvider, Icon, Flag } from '@petrvocelka/design-assets-react';

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

## Render Mode Guide

| Mode | Use For | Why |
| --- | --- | --- |
| `inline` | Logos, primary navigation, theme switchers, and other above-the-fold critical icons. | No request and no flash; path data is duplicated per render, so keep it selective. |
| `use` | Monochrome UI icons that need `currentColor`, hover states, and theme tokens. | Small wrapper markup with browser-cached SVG files and versioned URLs. |
| `img` | Flags, brand images, and self-contained colored assets. | Native image behavior (`alt`, `loading`, `decoding`) when page CSS does not need to style SVG internals. |

## Packages

| Package | Purpose |
| --- | --- |
| `@petrvocelka/design-assets-core` | Generated manifest, names, version, SVG files, href helpers, and `design-assets copy` CLI. |
| `@petrvocelka/design-assets-react` | React external-file components plus `@petrvocelka/design-assets-react/inline` for above-the-fold assets. |
| `@petrvocelka/design-assets-angular` | Angular standalone external-file components. |
| `@petrvocelka/design-assets-web-components` | Framework-agnostic custom elements and `@petrvocelka/design-assets-web-components/register`. |

`packages/tailwind-preset` is a private docs/demo helper in this case study. It is not required by the runtime packages and should not be treated as part of the consumer contract.

The target public asset contract is intentionally small: `icons`, `brand`, and `flags`. `pictograms` and `illustrations` remain in the repository as demo custom groups that show how colored SVG groups, CSS-variable themes, and Storybook documentation could work in a company-specific extension.

Stable public imports:

```tsx
import { Icon } from '@petrvocelka/design-assets-react';
import { SquareIcon } from '@petrvocelka/design-assets-react/inline';
import { manifest } from '@petrvocelka/design-assets-core/manifest';
```

Do not import raw internal source files from `src/` or unversioned asset paths. Use package exports so the manifest, versioning, accessibility rules, and generated `viewBox` data stay in sync.

## Delivery Examples

External-file mode is the default:

```html
<svg viewBox="0 0 24 24" class="size-5 text-blue-600" aria-hidden="true">
  <use href="/design-assets/icons/square.svg?v=0.1.0#asset"></use>
</svg>
```

The generated wrapper has no built-in `width` or `height`; the `class` above is consumer-owned styling.

Inline mode is available for critical above-the-fold assets:

```tsx
import { LogoMark } from '@petrvocelka/design-assets-react/inline';

<LogoMark ariaLabel="Design Assets" className="h-6 w-auto" />;
```

Angular generated inline selectors name the asset directly:

```html
<design-asset-icon-square />
<design-asset-brand-logo-mark />
<design-asset-flag-cz />
```

Keep render mode out of generated inline selector names. Use the generic `design-asset-use` or `design-asset-img` components when a view needs to choose delivery mode dynamically.

Use inline sparingly because it duplicates SVG markup in the DOM on every render.
Even though generated inline exports exist for every category in this case study, treat them as an ATF escape hatch. Large catalogs such as the full flag set should normally stay in external-file mode and be cached by the browser per SVG file.

## Optional Categories

Consumers can copy only the built-in asset categories they need:

```bash
yarn design-assets copy ./public/design-assets --categories icons,brand
```

Web Components can also register only selected element categories:

```ts
import { defineDesignAssetsElements } from '@petrvocelka/design-assets-web-components/register';

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
yarn version-packages
yarn validate
yarn typecheck --concurrency=1
yarn test --concurrency=1
yarn test:e2e --concurrency=1
yarn build --concurrency=1
yarn release
```

`yarn version-packages` runs `changeset version` and then `yarn generate`, because generated asset URLs use the package `ASSETS_VERSION`. See [`docs/publishing/github-packages.md`](docs/publishing/github-packages.md) for registry scope, token, and GitHub Actions guidance.

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
