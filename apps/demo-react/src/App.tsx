/**
 * Playground demonstrating external-file vs inline design asset usage.
 *
 * - Top nav: inline LogoMark + CircleIcon (ATF — zero HTTP for critical chrome)
 * - Toolbar: external-file Icon (non-critical, cached per file)
 * - Cards: external-file Pictogram
 * - Empty state: external-file Illustration
 * - Region selector: inline FlagCz (selected) + external Flag (others)
 * - 100× demo: external-file keeps DOM light; inline would duplicate path data
 */
import {
  DesignAssetsProvider,
  Flag,
  Icon,
  Illustration,
  Pictogram,
} from '@petrvocelka/design-assets-react';
import { ICON_SIZE_PRESETS } from '@design-assets/tailwind-preset/icon-sizes';
import {
  FlagCZ,
  LogoMark,
  CircleIcon,
  SquareIcon,
} from '@petrvocelka/design-assets-react/inline';

const REGIONS = [
  { code: 'cz' as const, label: 'Czech Republic' },
  { code: 'de' as const, label: 'Germany' },
  { code: 'us' as const, label: 'United States' },
  { code: 'br' as const, label: 'Brazil' },
];

const ARTICLES = [
  { title: 'Weighted average calculator', pictogram: 'weighted-average' as const },
  { title: 'Grade chart overview', pictogram: 'grade-chart' as const },
  { title: 'Scholarship eligibility', pictogram: 'scholarship' as const },
];

export function App() {
  return (
    <DesignAssetsProvider baseUrl="design-assets">
      <div className="min-h-screen">
        {/* ATF nav — inline for zero HTTP on logo + primary actions */}
        <header className="border-b border-slate-200 bg-white px-6 py-4">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
            <LogoMark ariaLabel="Design Assets" className="h-8 w-auto" />
            <nav className="flex items-center gap-3">
              <CircleIcon decorative className="size-5 text-brand-600" />
              <SquareIcon decorative className="size-5 text-slate-600" />
            </nav>
          </div>
        </header>

        {/* Secondary toolbar — external-file icons (browser caches each SVG once) */}
        <div className="border-b border-slate-200 bg-surface-muted px-6 py-2">
          <div className="mx-auto flex max-w-5xl gap-4">
            <Icon name="circle" decorative className="size-5 text-slate-700" />
            <Icon name="diamond" decorative className="size-5 text-slate-700" />
            <Icon name="triangle" decorative className="size-5 text-slate-700" />
            <Icon name="arrow-right" decorative className="size-5 text-slate-700" />
          </div>
        </div>

        <main className="mx-auto max-w-5xl space-y-10 px-6 py-8">
          {/* Region selector */}
          <section>
            <h2 className="mb-3 text-lg font-semibold">Region selector</h2>
            <div className="flex flex-wrap gap-3">
              {REGIONS.map((region) =>
                region.code === 'cz' ? (
                  <button
                    key={region.code}
                    type="button"
                    className="flex items-center gap-2 rounded-lg border-2 border-brand-600 bg-white px-3 py-2"
                  >
                    <FlagCZ ariaLabel={region.label} className="h-4 w-6" />
                    <span>{region.label}</span>
                  </button>
                ) : (
                  <button
                    key={region.code}
                    type="button"
                    className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2"
                  >
                    <Flag
                      countryCode={region.code}
                      ariaLabel={region.label}
                      className="h-4 w-6"
                    />
                    <span>{region.label}</span>
                  </button>
                ),
              )}
            </div>
          </section>

          {/* Article cards with pictograms */}
          <section>
            <h2 className="mb-3 text-lg font-semibold">Article cards</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {ARTICLES.map((article) => (
                <article
                  key={article.title}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <Pictogram
                    name={article.pictogram}
                    decorative
                    className="mb-3 size-12"
                  />
                  <h3 className="font-medium">{article.title}</h3>
                </article>
              ))}
            </div>
          </section>

          {/* Empty state */}
          <section className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center">
            <Illustration
              name="empty-state"
              ariaLabel="No results"
              className="mx-auto mb-4 h-32 w-auto"
            />
            <p className="text-slate-600">No results found.</p>
          </section>

          {/* XS sizing — flex layout must not stretch icon to full width */}
          <section id="xs-icon-demo">
            <h2 className="mb-3 text-lg font-semibold">XS icon sizing</h2>
            <div className="flex items-center justify-center" data-testid="xs-icon">
              <Icon
                name="square"
                decorative
                className={ICON_SIZE_PRESETS.xs.className}
              />
            </div>
          </section>

          {/* currentColor comparison — used by Playwright e2e */}
          <section id="current-color-demo">
            <h2 className="mb-3 text-lg font-semibold">currentColor comparison</h2>
            <div className="flex items-center gap-8">
              <div data-testid="external-icon">
                <Icon
                  name="square"
                  decorative
                  className="size-8 text-blue-600"
                />
              </div>
              <div data-testid="img-icon">
                <img
                  src="design-assets/icons/square.svg"
                  alt=""
                  className="size-8 text-blue-600"
                />
              </div>
              <div data-testid="inline-icon">
                <SquareIcon decorative className="size-8 text-blue-600" />
              </div>
            </div>
          </section>

          {/* 100× same icon — external-file DOM stays small */}
          <section>
            <h2 className="mb-3 text-lg font-semibold">
              100× same icon (external-file)
            </h2>
            <p className="mb-4 text-sm text-slate-600">
              Each render is a tiny &lt;svg&gt;&lt;use&gt;&lt;/use&gt;&lt;/svg&gt;
              wrapper. Path data lives once in the browser&apos;s parsed SVG cache,
              not 100 times in the DOM.
            </p>
            <div className="flex flex-wrap gap-1">
              {Array.from({ length: 100 }, (_, i) => (
                <Icon key={i} name="square" decorative className="size-4 text-brand-600" />
              ))}
            </div>
          </section>
        </main>
      </div>
    </DesignAssetsProvider>
  );
}
