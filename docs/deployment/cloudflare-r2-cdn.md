# Cloudflare R2 / CDN deployment

CDN-hosted design assets are useful for platform teams that want one shared asset origin across many applications. Treat this as an advanced deployment mode. Same-origin Cloudflare Pages copy remains the safer default for most apps.

## Versioned artifact layout

Publish immutable assets under the package version:

```txt
design-assets/0.1.0/icons/square.svg
design-assets/0.1.0/pictograms/grade-chart.svg
design-assets/0.1.0/brand/logo-mark.svg
design-assets/0.1.0/flags/cz.svg
design-assets/0.1.0/manifest.json
design-assets/0.1.0/version.json
```

Do not overwrite an existing version path. Publish a new version path for every package release.

## Provider config

Because the version is already in the path, disable query-string cache busting:

```tsx
<DesignAssetsProvider
  baseUrl="https://assets.example.com/design-assets/0.1.0"
  versionTag={null}
/>
```

Generated href:

```html
<use href="https://assets.example.com/design-assets/0.1.0/icons/square.svg#asset"></use>
```

## Required headers

SVG assets:

```txt
Content-Type: image/svg+xml
Cache-Control: public, max-age=31536000, immutable
Access-Control-Allow-Origin: *
```

JSON metadata:

```txt
Content-Type: application/json
Cache-Control: public, max-age=300
Access-Control-Allow-Origin: *
```

Restrict `Access-Control-Allow-Origin` to known app origins if your platform policy does not allow wildcard CORS.

## Upload with Wrangler

Example script:

```bash
VERSION=$(node -p "require('./packages/core/package.json').version")
TARGET="design-assets/${VERSION}"

yarn generate
yarn validate
yarn build
yarn design-assets copy "./tmp/${TARGET}"

wrangler r2 object put "design-assets/${TARGET}/manifest.json" \
  --file "./tmp/${TARGET}/manifest.json" \
  --content-type "application/json"

wrangler r2 object put "design-assets/${TARGET}/version.json" \
  --file "./tmp/${TARGET}/version.json" \
  --content-type "application/json"

for file in ./tmp/${TARGET}/**/*.svg; do
  key="${file#./tmp/}"
  wrangler r2 object put "design-assets/${key}" \
    --file "$file" \
    --content-type "image/svg+xml"
done
```

For larger catalogs, replace the loop with an upload/sync job that preserves content types and fails when any file upload fails.

## Smoke test

Add a CDN smoke test before promoting a release:

```bash
ASSET_URL="https://assets.example.com/design-assets/0.1.0/icons/square.svg"

curl -I "$ASSET_URL" | tee /tmp/design-assets-cdn-headers.txt
```

Verify:

- status is `200`
- `Content-Type` includes `image/svg+xml`
- `Cache-Control` includes `immutable`
- `Access-Control-Allow-Origin` is present
- `https://assets.example.com/design-assets/0.1.0/manifest.json` returns JSON

## Browser verification

Cross-origin external SVG references should be covered by Playwright in Chromium and WebKit:

```bash
yarn test:e2e
```

The test should render an icon through a CDN-style base URL and assert that `currentColor` still paints the external `<use href>` result.

## Rollout rules

- Publish the CDN assets before releasing or deploying apps that point to them.
- Keep old version paths forever, or at least for the full support window of every consuming app.
- Do not remove deprecated icons from an existing CDN version.
- Prefer path versioning over overwriting files with the same URL.
- Use same-origin Pages copy when CORS, security policy, or WebKit behavior is uncertain.
