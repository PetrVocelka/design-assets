# Sizing

`design-assets` components are intentionally dimensionless. They render the SVG `viewBox`, accessibility attributes, `class` / `className`, and the external `<use href>` reference. They do not ship default `width`, `height`, CSS, Tailwind utilities, or styled-components assumptions.

That keeps the package portable across Tailwind, CSS Modules, plain CSS, Angular styles, design tokens, and native framework wrappers.

## Tailwind example

```tsx
<Icon name="square" decorative className="size-5 text-blue-600" />
<Flag countryCode="cz" ariaLabel="Czech Republic" className="h-4 w-6" />
<LogoMark ariaLabel="Design Assets" className="h-6 w-auto" />
```

## Plain CSS example

```tsx
<Icon name="square" decorative className="app-icon app-icon--md" />
```

```css
.app-icon {
  display: inline-block;
  flex-shrink: 0;
}

.app-icon--md {
  width: 1.25rem;
  height: 1.25rem;
}
```

## Wrapper component example

```tsx
import { Icon, type IconProps } from '@design-assets/react';

const ICON_SIZE_CLASS = {
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-6',
} as const;

type AppIconProps = IconProps & {
  size?: keyof typeof ICON_SIZE_CLASS;
};

export function AppIcon({ size = 'md', className, ...props }: AppIconProps) {
  return (
    <Icon
      {...props}
      className={[ICON_SIZE_CLASS[size], 'shrink-0', className].filter(Boolean).join(' ')}
    />
  );
}
```

This is the recommended enterprise pattern: the asset library stays generic, while each product or design system owns its sizing rules.

## Colored asset theming

Demo custom groups such as pictograms and illustrations can use semantic CSS variables with built-in fallbacks. That lets a product theme colored assets without maintaining separate light/dark SVG files:

```tsx
<div className="asset-theme asset-theme--dark">
  <Pictogram name="school" className="size-16" />
  <Illustration name="empty-state" ariaLabel="No results found" className="h-40 w-auto" />
</div>
```

```css
.asset-theme--dark {
  --da-asset-background: #0f172a;
  --da-asset-surface: #1e293b;
  --da-asset-primary: #94a3b8;
  --da-asset-strong: #3b82f6;
  --da-asset-ink: #eff6ff;
  --da-asset-muted: #94a3b8;
  --da-asset-subtle: #475569;
  --da-asset-accent: #f59e0b;
  --da-asset-success: #22c55e;
  --da-asset-danger: #ef4444;
}
```

## Storybook sizing

Storybook uses example size controls so the catalog is visually readable. Those controls are documentation-only. They are not part of the runtime package contract and do not require Tailwind in consumer apps.
