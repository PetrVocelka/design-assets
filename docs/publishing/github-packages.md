# Publishing to GitHub Packages

This project is designed to publish versioned packages from a platform/design-system repository. Product teams consume those packages and choose when to roll forward.

## Package scope

For this public case study the packages publish under the author's GitHub scope:

```txt
@petrvocelka/design-assets-core
@petrvocelka/design-assets-react
@petrvocelka/design-assets-angular
@petrvocelka/design-assets-web-components
```

The Tailwind preset in this repository is private docs/demo tooling, not a runtime package that consumers need to install.

In a company, use your organization scope instead:

```txt
@company/design-assets-core
@company/design-assets-react
```

or keep the nested namespace if your registry policy supports it:

```txt
@company/design-assets
@company/design-assets-react
```

## Registry configuration

This repo uses Yarn 4, so registry mapping belongs in `.yarnrc.yml` rather than `.npmrc`:

```yaml
npmScopes:
  petrvocelka:
    npmRegistryServer: "https://npm.pkg.github.com"
    npmPublishRegistry: "https://npm.pkg.github.com"
    npmAlwaysAuth: true
    npmAuthToken: "${NODE_AUTH_TOKEN:-}"
```

For a company scope, replace `petrvocelka` with your organization scope without the leading `@`.

GitHub Packages expects the npm scope to match the GitHub user or organization that owns the package namespace. This repo intentionally uses `@petrvocelka/*` for the public playground packages; if the project later moves to an organization, rename the packages and Yarn scope mapping together.

## Release flow

Use Changesets for versioning:

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

`yarn version-packages` runs `changeset version` and then `yarn generate` so `packages/core/generated/version.ts` matches the package version being published.

The four public packages are configured as a fixed Changesets group so the generated asset core and framework adapters move together. Framework adapters declare the core peer range as `>=0.1.0 <1`; Changesets is configured to avoid artificial peer-dependent major bumps while the next core version remains inside that range.

## GitHub Actions release workflow

Example release workflow:

```yaml
name: Release

on:
  push:
    branches:
      - main

permissions:
  contents: write
  packages: write
  pull-requests: write

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v5
        with:
          fetch-depth: 0

      - run: corepack enable

      - uses: actions/setup-node@v5
        with:
          node-version: 24
          cache: yarn
          cache-dependency-path: yarn.lock
          registry-url: https://npm.pkg.github.com
          scope: '@petrvocelka'

      - name: Install
        run: yarn install --immutable

      - name: Generate
        run: yarn generate

      - name: Check generated files
        run: |
          git diff --exit-code packages/core/generated packages/react/generated packages/angular/generated \
            || (echo "Generated files are stale. Run yarn generate." && exit 1)

      - name: Validate
        run: yarn validate

      - name: Typecheck
        run: yarn typecheck --concurrency=1

      - name: Test
        run: yarn test --concurrency=1

      - name: Install Playwright browsers
        run: yarn workspace @design-assets/demo-react exec playwright install --with-deps chromium webkit

      - name: E2E
        run: yarn test:e2e --concurrency=1

      - name: Build
        run: yarn build --concurrency=1

      - name: Create version PR or publish
        uses: changesets/action@v1.8.0
        with:
          version: yarn version-packages
          publish: yarn release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

If your organization requires a personal access token or a fine-grained automation token, store it as `NODE_AUTH_TOKEN` and replace the publish environment value.

## Required secrets

Depending on your GitHub Packages policy, use one of:

- `GITHUB_TOKEN` with `packages: write` permissions for same-repo package publishing.
- `NODE_AUTH_TOKEN` containing a token allowed to publish to the target package scope.

## Consumer installation

Consumers using Yarn 4 also need registry configuration:

```yaml
npmScopes:
  petrvocelka:
    npmRegistryServer: "https://npm.pkg.github.com"
    npmAuthToken: "${NODE_AUTH_TOKEN:-}"
```

Then:

```bash
yarn add @petrvocelka/design-assets-core @petrvocelka/design-assets-react
```

## Release notes

Every release should clearly separate:

- added assets
- visually changed assets
- deprecated assets
- breaking API changes
- migration notes

Asset removal should only happen after a documented deprecation window and a coordinated major version.
