# Storybook import guide

Canonical design-assets documentation lives in `apps/docs`. It is the source for usage examples, accessibility rules, asset metadata, galleries, and platform guidance.

## Current setup

Run the library Storybook from this repository:

```bash
yarn storybook
```

The docs read from the generated `@petrvocelka/design-assets-core` manifest, so galleries and metadata match the package version in the workspace.

## Consumer Storybook strategy

Consumer applications should be able to import the design-assets docs as one sidebar entry, not as dozens of separate sections. The target navigation shape is:

```txt
Design Assets
  Overview
  Usage
  Accessibility
  Icons
  Pictograms
  Illustrations
  Brand
  Flags
```

This keeps app Storybooks readable while still making the asset catalog discoverable.

## Future package export

The intended package contract is:

```ts
import { designAssetsStories } from '@petrvocelka/design-assets-react/storybook';
```

Consumer Storybook config can then compose the imported stories:

```ts
import type { StorybookConfig } from '@storybook/react-vite';
import { designAssetsStories } from '@petrvocelka/design-assets-react/storybook';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(ts|tsx|mdx)',
    ...designAssetsStories,
  ],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/react-vite',
};

export default config;
```

## Manifest source of truth

Imported docs should read the consumer-installed `@petrvocelka/design-assets-core` manifest. That means:

- a consumer on `@petrvocelka/design-assets-core@0.1.0` sees the `0.1.0` asset catalog
- a consumer on `@petrvocelka/design-assets-core@0.2.0` sees the `0.2.0` asset catalog
- docs never drift from the installed package version

Do not duplicate icon names, descriptions, deprecation notes, or categories in consumer docs.

## Why not Confluence only

Confluence can explain process, ownership, and approvals. Storybook should remain the living technical catalog because it can render the real components, read generated metadata, show deprecation state, and fail in CI when examples drift.
