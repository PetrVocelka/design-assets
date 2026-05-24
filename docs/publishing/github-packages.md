# Publishing to GitHub Packages

This project is designed to publish versioned packages from a platform/design-system repository. Product teams consume those packages and choose when to roll forward.

## Package scope

For this case study the packages use the `@design-assets/*` scope:

```txt
@design-assets/core
@design-assets/react
@design-assets/angular
@design-assets/web-components
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

Create an `.npmrc` for GitHub Packages:

```ini
@design-assets:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

For a company scope, replace `@design-assets` with your organization scope.

## Release flow

Use Changesets for versioning:

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

`yarn generate` must run after `yarn changeset version` so `packages/core/generated/version.ts` matches the package version being published.

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
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          registry-url: https://npm.pkg.github.com

      - name: Enable Corepack
        run: corepack enable

      - name: Install
        run: yarn install --immutable

      - name: Install Playwright browsers
        run: yarn workspace @design-assets/demo-react playwright install --with-deps chromium webkit

      - name: Generate
        run: yarn generate

      - name: Validate
        run: yarn validate

      - name: Lint
        run: yarn lint

      - name: Typecheck
        run: yarn typecheck

      - name: Test
        run: yarn test

      - name: E2E
        run: yarn test:e2e

      - name: Build
        run: yarn build

      - name: Publish
        run: yarn changeset publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

If your organization requires a personal access token or a fine-grained automation token, store it as `NODE_AUTH_TOKEN` and replace the publish environment value.

## Required secrets

Depending on your GitHub Packages policy, use one of:

- `GITHUB_TOKEN` with `packages: write` permissions for same-repo package publishing.
- `NODE_AUTH_TOKEN` containing a token allowed to publish to the target package scope.

## Consumer installation

Consumers also need registry configuration:

```ini
@design-assets:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

Then:

```bash
yarn add @design-assets/core @design-assets/react
```

## Release notes

Every release should clearly separate:

- added assets
- visually changed assets
- deprecated assets
- breaking API changes
- migration notes

Asset removal should only happen after a documented deprecation window and a coordinated major version.
