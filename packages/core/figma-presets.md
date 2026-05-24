# Figma SVG Export Presets

Recommended presets for the [Figma SVG Export plugin](https://www.figma.com/community/plugin/814345141907543603).

| Category | Canvas | Preset | Key settings |
|---|---|---|---|
| Icons | 24×24 | `icon-mono` | `currentColor`, preserve viewBox, remove title/desc, 1.5px stroke |
| Pictograms | 48×48 | `pictogram-color` | Token palette colors, flatten paths |
| Illustrations | flexible | `illustration` | Up to 6 token colors, gradients allowed |
| Brand | per spec | `brand` | Exact brand colors, no token substitution |

Export flow: Figma → `packages/core/src/<category>/` → `yarn generate` → PR.
