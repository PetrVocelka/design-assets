# Custom asset groups

Custom asset groups are intentionally future work for the public package contract. The v1 built-in contract is `icons`, `brand`, and `flags`; `pictograms` and `illustrations` remain in this case study as demo custom groups so the repository can show colored SVG theming and Storybook composition without making every consumer adopt those categories.

## Why not implement custom groups in the first slice

The stable v1 categories are known at package build time:

```txt
icons
brand
flags
```

That lets the package generate stable exports like:

```ts
import { Icon, Flag } from '@design-assets/react';
import type { IconName, CountryCode } from '@design-assets/core';
```

The demo custom groups are also generated in this repository:

```txt
pictograms
illustrations
```

They are examples of what a company-specific asset group could look like: colored SVG files, CSS-variable theming, Storybook examples, and typed adapters. Arbitrary groups would need either generated app-local code or a less strict generic API. Both are valid, but they should be an explicit v2 design instead of being hidden inside the copy command.

## Intended config shape

A future custom group config could look like this:

```ts
import { defineDesignAssetsConfig } from '@design-assets/core/config';

export default defineDesignAssetsConfig({
  groups: {
    product: {
      source: './assets/product',
      outputPath: 'product',
      viewBox: '0 0 24 24',
      colorMode: 'monochrome',
      sizeLimitBytes: 5120,
    },
    marketing: {
      source: './assets/marketing',
      outputPath: 'marketing',
      colorMode: 'colored',
      sizeLimitBytes: 81920,
    },
  },
});
```

Generated outputs would include:

```txt
generated/svg/product/*.svg
generated/svg/marketing/*.svg
generated/manifest.json
generated/names.ts
```

## Possible API

Generic React API:

```tsx
<Asset group="product" name="warehouse-truck" decorative />
```

Generated strongly typed API:

```tsx
import { ProductAsset } from '@company/design-assets/react';

<ProductAsset name="warehouse-truck" decorative />
```

## Trade-offs

Generic API:

- easier to implement
- works for any group name
- weaker TypeScript autocomplete unless the app imports generated local types

Generated typed API:

- best developer experience
- strong autocomplete per group
- more complex package generation and publishing

## Recommended v2 path

Start with generated typed APIs for company-controlled groups. Keep `icons`, `brand`, and `flags` as the stable baseline, then add custom groups through a config-driven generator with its own tests and Storybook import story. The current `pictograms` and `illustrations` examples are the reference demo for that future path.
