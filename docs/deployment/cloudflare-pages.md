# Cloudflare Pages deployment

Cloudflare Pages same-origin deployment is the recommended default. The app build copies design assets into the deployed static output, so external SVG `<use href>` references stay same-origin and avoid CORS/WebKit edge cases.

## App scripts

Add the copy step before local dev and production build:

```json
{
  "scripts": {
    "predev": "yarn design-assets copy ./public/design-assets",
    "dev": "vite dev",
    "prebuild": "yarn design-assets copy ./public/design-assets",
    "build": "vite build"
  }
}
```

For non-Vite frameworks, keep the same `prebuild` copy step and point it at the framework's public/static directory.

## Provider config

Same-origin Pages deployments use the default base URL:

```tsx
<DesignAssetsProvider baseUrl="/design-assets" />
```

Generated href:

```html
<use href="/design-assets/icons/square.svg?v=0.1.0#asset"></use>
```

## Output shape

After build, the Cloudflare Pages output should contain:

```txt
dist/
  index.html
  assets/
  design-assets/
    icons/square.svg
    pictograms/grade-chart.svg
    brand/logo-mark.svg
    flags/cz.svg
    manifest.json
    version.json
```

## Cloudflare Pages build settings

Example for a Vite app:

```txt
Build command: yarn install --immutable && yarn build
Build output directory: dist
```

If Cloudflare already runs install separately in your setup, use:

```txt
Build command: yarn build
```

## Headers

Use a `_headers` file in the app's public directory when the framework copies it to the output.

```txt
/design-assets/**/*.svg
  Content-Type: image/svg+xml
  Cache-Control: public, max-age=31536000, immutable

/design-assets/*.json
  Content-Type: application/json
  Cache-Control: public, max-age=300
```

Do not set `Content-Type: image/svg+xml` for all files under `design-assets`; `manifest.json` and `version.json` must remain JSON.

## Service worker / offline

Fragments are not sent over HTTP, so a request like:

```txt
/design-assets/icons/square.svg?v=0.1.0#asset
```

is cached by the service worker as:

```txt
/design-assets/icons/square.svg?v=0.1.0
```

Runtime caching works well for large catalogs. For offline app shells, precache only critical assets such as the logo, primary navigation icons, and current locale flag.

## Validation checklist

Before deploying:

```bash
yarn generate
yarn validate
yarn lint
yarn typecheck
yarn test
yarn test:e2e
yarn build
```

Then verify:

- `/design-assets/version.json` returns `200`.
- `/design-assets/icons/square.svg?v=<version>` returns `200`.
- SVG responses use `Content-Type: image/svg+xml`.
- JSON responses use `Content-Type: application/json`.
- The app renders `<use href="/design-assets/...#asset">` successfully in Chromium and WebKit.

## Why this is the default

Same-origin copy is the safest deployment mode:

- no CORS
- no cross-origin SVG quirks
- no CDN publish ordering problem
- local, integration, staging, and production can use the same render path
- product teams control upgrades through normal app deployments
