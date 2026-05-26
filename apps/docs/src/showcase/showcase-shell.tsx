import type { CSSProperties, ReactNode } from 'react';

export type Theme = 'light' | 'dark';
export type RenderMode = 'use' | 'img' | 'inline';

export function themeClasses(theme: Theme): string {
  return theme === 'dark'
    ? 'bg-slate-900 text-white border-slate-700'
    : 'bg-white text-slate-800 border-slate-200';
}

export function assetThemeVariables(theme: Theme): CSSProperties {
  return theme === 'dark'
    ? ({
        '--da-asset-background': '#0f172a',
        '--da-asset-surface': '#1e293b',
        '--da-asset-surface-strong': '#334155',
        '--da-asset-primary': '#94a3b8',
        '--da-asset-primary-strong': '#3b82f6',
        '--da-asset-strong': '#3b82f6',
        '--da-asset-ink': '#eff6ff',
        '--da-asset-muted': '#94a3b8',
        '--da-asset-subtle': '#475569',
        '--da-asset-accent': '#f59e0b',
        '--da-asset-success': '#22c55e',
        '--da-asset-danger': '#ef4444',
        '--da-brand-mark-background': '#eff6ff',
        '--da-brand-mark-primary': '#3b82f6',
        '--da-brand-mark-foreground': '#0f172a',
      } as CSSProperties)
    : ({
        '--da-asset-background': '#eff6ff',
        '--da-asset-surface': '#dbeafe',
        '--da-asset-surface-strong': '#dbeafe',
        '--da-asset-primary': '#3b82f6',
        '--da-asset-primary-strong': '#2563eb',
        '--da-asset-strong': '#1d4ed8',
        '--da-asset-ink': '#1e3a8a',
        '--da-asset-muted': '#64748b',
        '--da-asset-subtle': '#cbd5e1',
        '--da-asset-accent': '#f59e0b',
        '--da-asset-success': '#22c55e',
        '--da-asset-danger': '#ef4444',
        '--da-brand-mark-background': '#1e293b',
        '--da-brand-mark-primary': '#3b82f6',
        '--da-brand-mark-foreground': '#eff6ff',
      } as CSSProperties);
}

export function kebabToPascal(name: string): string {
  return name
    .replace(/-([a-z0-9])/g, (_, char: string) => char.toUpperCase())
    .replace(/^([a-z])/, (_, char: string) => char.toUpperCase());
}

export function inlineComponentName(category: string, assetName: string): string {
  if (category === 'brand') return kebabToPascal(assetName);
  if (category === 'flags') return `Flag${assetName.toUpperCase()}`;
  const suffix: Record<string, string> = {
    icons: 'Icon',
    pictograms: 'Pictogram',
    illustrations: 'Illustration',
  };
  return `${kebabToPascal(assetName)}${suffix[category] ?? 'Asset'}`;
}

export const showcaseControlArgTypes = {
  renderMode: {
    name: 'Render mode',
    description: 'Asset delivery mode for the example.',
    control: { type: 'select' as const },
    options: ['use', 'img', 'inline'],
  },
  theme: {
    name: 'Background',
    control: { type: 'select' as const },
    options: ['light', 'dark'],
  },
  decorative: {
    name: 'Decorative',
    control: 'boolean' as const,
  },
  ariaLabel: {
    name: 'Accessible label',
    control: { type: 'text' as const },
    if: { arg: 'decorative', eq: false },
  },
};

interface ShowcaseShellProps {
  intro: ReactNode;
  previewLabel?: string;
  theme: Theme;
  meta: ReactNode;
  snippet: string;
  children: ReactNode;
}

export function ShowcaseShell({
  intro,
  previewLabel = 'Preview',
  theme,
  meta,
  snippet,
  children,
}: ShowcaseShellProps) {
  const surface = themeClasses(theme);
  const assetVariables = assetThemeVariables(theme);

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      {intro}

      <section>
        <h3 className="mb-2 text-sm font-medium text-slate-600">{previewLabel}</h3>
        <div
          className={`flex min-h-[120px] items-center justify-center rounded-xl border p-8 ${surface}`}
          style={assetVariables}
        >
          {children}
        </div>
        <p className="mt-2 text-xs text-slate-500">{meta}</p>
      </section>

      <section>
        <h3 className="mb-3 text-sm font-medium text-slate-600">
          Example usage (sizing is consumer-owned)
        </h3>
        <pre className="overflow-x-auto rounded-lg bg-slate-950 p-4 text-xs text-slate-100">
          {snippet}
        </pre>
      </section>
    </div>
  );
}
