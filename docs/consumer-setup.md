# Consumer setup

This guide shows how to consume `design-assets` from an application. The default model is same-origin static assets: copy generated SVG files into the app's `public/design-assets` folder, then render them through the framework adapter.

## Install

React apps:

```bash
yarn add @petrvocelka/design-assets-core @petrvocelka/design-assets-react
```

Angular apps:

```bash
yarn add @petrvocelka/design-assets-core @petrvocelka/design-assets-angular
```

Plain HTML or framework-agnostic apps:

```bash
yarn add @petrvocelka/design-assets-core @petrvocelka/design-assets-web-components
```

The runtime packages are styling-framework agnostic. They do not require Tailwind; Tailwind examples in this repository are docs/demo conveniences only.

## Copy assets

Run the copy command from the consuming app:

```bash
yarn design-assets copy ./public/design-assets
```

The output should look like this:

```txt
public/design-assets/
  icons/square.svg
  pictograms/grade-chart.svg
  brand/logo-mark.svg
  flags/cz.svg
  manifest.json
  version.json
```

Add the copy command to app lifecycle scripts so local development and production builds use the same asset path:

```json
{
  "scripts": {
    "predev": "yarn design-assets copy ./public/design-assets",
    "prebuild": "yarn design-assets copy ./public/design-assets"
  }
}
```

If an app only uses the core icon/brand surface, copy only those built-in categories:

```bash
yarn design-assets copy ./public/design-assets --categories icons,brand
```

See [`optional-categories.md`](optional-categories.md) for how this affects `manifest.json` and adapter usage.

## React

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

Size and color are consumer-owned:

```tsx
<Icon name="square" decorative className="size-5 text-blue-600" />
```

Use the inline entrypoint only for above-the-fold assets where avoiding an extra request matters more than keeping path data out of the DOM:

```tsx
import { LogoMark } from '@petrvocelka/design-assets-react/inline';

<LogoMark ariaLabel="Design Assets" />;
```

Inline exports are generated broadly for demonstration and ATF escape hatches. Do not inline large catalogs such as all flags into product UI; keep those in external-file mode so the browser can fetch and cache only the files a page actually uses.

Angular generated inline selectors name the asset, not the render mode:

```html
<design-asset-icon-square />
<design-asset-brand-logo-mark />
<design-asset-flag-cz />
```

For dynamic rendering, use `design-asset-use` or `design-asset-img` instead of encoding `use`, `img`, or `inline` into the asset selector itself.

## Angular

```ts
import { Component } from '@angular/core';
import { IconComponent, provideDesignAssets } from '@petrvocelka/design-assets-angular';

@Component({
  selector: 'app-root',
  imports: [IconComponent],
  providers: [provideDesignAssets({ baseUrl: '/design-assets' })],
  template: `
    <design-asset-icon name="square" />
  `,
})
export class AppComponent {}
```

## Web Components

```html
<script type="module">
  import {
    configureDesignAssets,
    defineDesignAssetsElements,
  } from '@petrvocelka/design-assets-web-components/register';

  configureDesignAssets({ baseUrl: '/design-assets' });
  defineDesignAssetsElements({ categories: ['icons', 'flags'] });
</script>

<da-icon name="square" decorative></da-icon>
<da-flag country-code="cz" aria-label="Czech Republic"></da-flag>
```

See [`sizing.md`](sizing.md) for Tailwind, plain CSS, and wrapper examples.

## Custom asset hrefs and flag overrides

The default flags come from `flag-icons`, but a product can still own specific flag files. The simplest override is to replace copied files after `design-assets copy`, keeping the same folder and `id="asset"` contract:

```txt
public/design-assets/flags/cz.svg
```

For a separate flag folder, CDN, or migration path, configure an href resolver.

React:

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

Angular:

```ts
provideDesignAssets({
  baseUrl: '/design-assets',
  resolveHref: ({ category, name, defaultHref }) =>
    category === 'flags' ? `/local-flags/${name}.svg#asset` : defaultHref,
});
```

Web Components:

```ts
configureDesignAssets({
  baseUrl: '/design-assets',
  resolveHref: ({ category, name, defaultHref }) =>
    category === 'flags' ? `/local-flags/${name}.svg#asset` : defaultHref,
});
```

Resolvers receive `category`, `name`, `baseUrl`, `versionTag`, and `defaultHref`. Return `defaultHref` for assets that should keep the package-managed location.

## How hrefs are built

Every generated SVG has a root `id="asset"`:

```xml
<svg id="asset" viewBox="0 0 24 24" ...>
  ...
</svg>
```

Adapters render external SVG references like this:

```html
<svg viewBox="0 0 24 24" aria-hidden="true">
  <use href="/design-assets/icons/square.svg?v=0.1.0#asset"></use>
</svg>
```

The query string comes before `#asset` so browser and service-worker caches see the versioned URL. The fragment is never sent over HTTP; it selects the `asset` element inside the fetched SVG document.

## Versioning and cache busting

`DesignAssetsProvider`, `provideDesignAssets`, and the web components registry default `versionTag` to `ASSETS_VERSION` from `@petrvocelka/design-assets-core`.

Default same-origin output:

```txt
/design-assets/icons/square.svg?v=0.1.0#asset
```

If your deployment uses versioned paths, opt out of query-string cache busting:

```tsx
<DesignAssetsProvider
  baseUrl="https://assets.example.com/design-assets/0.1.0"
  versionTag={null}
>
  ...
</DesignAssetsProvider>
```

## Import contract

Consumers should import adapter APIs, not raw source SVGs:

```tsx
import { Icon } from '@petrvocelka/design-assets-react';
```

Avoid importing internal files:

```tsx
// Do not do this.
import square from '@petrvocelka/design-assets-core/src/icons/square.svg';
```

Direct source imports bypass the manifest, versioning, accessibility props, generated `viewBox`, and deprecation metadata.
