# Optional categories

`design-assets` has a small stable v1 contract plus demo custom groups. The demo groups are generated in this repository so the case study can show the full pipeline, but they are not required for a minimal consumer install.

Stable built-in categories:

- `icons`
- `brand`
- `flags`

Demo custom groups in this case study:

- `pictograms`
- `illustrations`

The default is to generate and publish all categories in the case-study repo so Storybook can demonstrate the full pipeline. Consumers can opt into a smaller runtime surface when copying assets or registering web components.

## Copy only selected categories

```bash
yarn design-assets copy ./public/design-assets --categories icons,brand
```

This copies only:

```txt
public/design-assets/
  icons/
  brand/
  manifest.json
  version.json
```

`manifest.json` is filtered to the copied categories so product tooling does not advertise missing public assets.

## Register only selected Web Components

```ts
import { configureDesignAssets, defineDesignAssetsElements } from '@design-assets/web-components/register';

configureDesignAssets({ baseUrl: '/design-assets' });
defineDesignAssetsElements({ categories: ['icons', 'brand'] });
```

This registers:

```txt
da-icon
da-brand-asset
```

and skips:

```txt
da-pictogram
da-illustration
da-flag
```

## React and Angular

React and Angular adapters are normal package exports. Import only the components a product needs:

```tsx
import { Icon, BrandAsset } from '@design-assets/react';
```

```ts
import { IconComponent, BrandAssetComponent } from '@design-assets/angular';
```

Bundlers can tree-shake unused adapter code, but public SVG availability still depends on what was copied to `public/design-assets`. If an app excludes `flags`, it should not render `<Flag />` or `<da-flag>`.

## Defaults

When no category option is provided, the case-study repo includes the stable categories and demo custom groups:

```bash
yarn design-assets copy ./public/design-assets
```

```ts
defineDesignAssetsElements();
```

Both commands include `icons`, `brand`, `flags`, `pictograms`, and `illustrations` in this case-study repository. A production package can keep the same mechanics while publishing a smaller default catalog.
