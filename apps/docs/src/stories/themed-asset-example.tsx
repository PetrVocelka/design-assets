import type { ReactNode } from 'react';
import {
  assetThemeVariables,
  themeClasses,
  type Theme,
} from '../showcase/showcase-shell';

const THEMES = ['light', 'dark'] as const satisfies readonly Theme[];

const CSS_VARIABLE_SNIPPET = `.asset-theme--dark {
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
  --da-brand-mark-background: #eff6ff;
  --da-brand-mark-primary: #3b82f6;
  --da-brand-mark-foreground: #0f172a;
}`;

interface ThemedAssetExampleProps {
  description: ReactNode;
  renderAsset: (theme: Theme) => ReactNode;
}

export function ThemedAssetExample({
  description,
  renderAsset,
}: ThemedAssetExampleProps) {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="text-sm text-slate-600">{description}</div>

      <div className="grid gap-4 md:grid-cols-2">
        {THEMES.map((theme) => (
          <section
            key={theme}
            className={`flex min-h-[180px] flex-col items-center justify-center gap-4 rounded-xl border p-8 ${themeClasses(theme)}`}
            style={assetThemeVariables(theme)}
          >
            {renderAsset(theme)}
            <span className="text-xs font-medium uppercase tracking-wide">{theme}</span>
          </section>
        ))}
      </div>

      <pre className="overflow-x-auto rounded-lg bg-slate-950 p-4 text-xs text-slate-100">
        {CSS_VARIABLE_SNIPPET}
      </pre>
    </div>
  );
}
