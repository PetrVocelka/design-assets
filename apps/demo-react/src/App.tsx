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
      <div className="demo-shell min-h-screen text-slate-100">
        {/* ATF nav — inline for zero HTTP on logo + primary actions */}
        <header className="px-6 py-6">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
            <a href="../" className="flex items-center gap-3 text-sm font-semibold text-slate-100">
              <LogoMark ariaLabel="Design Assets" className="size-8" />
              <span>Design Assets React Demo</span>
            </a>
            <nav className="flex items-center gap-3 rounded-full border border-slate-800 bg-slate-950/60 px-4 py-2 text-slate-300 shadow-2xl shadow-slate-950/30">
              <CircleIcon decorative className="size-5 text-blue-300" />
              <SquareIcon decorative className="size-5 text-slate-300" />
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl space-y-8 px-6 pb-16 pt-6">
          <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-blue-300">
                Framework proof of use
              </p>
              <h1 className="max-w-3xl text-5xl font-black leading-none tracking-[-0.06em] text-slate-50 sm:text-7xl">
                React app with typed SVG assets.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                The same asset source drives inline critical chrome, external
                cached SVG files, native image rendering, and framework-specific
                accessibility contracts.
              </p>
            </div>

            {/* Secondary toolbar — external-file icons (browser caches each SVG once) */}
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5 shadow-2xl shadow-slate-950/40">
              <p className="text-sm font-semibold text-slate-300">
                External toolbar icons
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                Rendered with tiny <code>&lt;use href&gt;</code> wrappers and
                cached per SVG file.
              </p>
              <div className="mt-5 flex gap-4 text-blue-300">
                <Icon name="circle" decorative className="size-6" />
                <Icon name="diamond" decorative className="size-6" />
                <Icon name="triangle" decorative className="size-6" />
                <Icon name="arrow-right" decorative className="size-6" />
              </div>
            </div>
          </section>

          <section className="grid gap-4 md:grid-cols-3">
            <article className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold text-blue-300">Inline</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight">
                Critical chrome
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Logo and primary UI icons render inline to avoid first-paint
                requests and visual flash.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold text-blue-300">External use</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight">
                Cacheable UI icons
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Repeated monochrome assets keep path data out of JavaScript and
                HTML while preserving <code>currentColor</code>.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold text-blue-300">Image mode</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight">
                Native colored assets
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Flags and self-contained colored SVGs can use browser-native
                <code> img</code> behavior.
              </p>
            </article>
          </section>

          {/* Region selector */}
          <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
                  Mixed rendering
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight">
                  Region selector
                </h2>
              </div>
              <p className="hidden max-w-sm text-right text-sm leading-6 text-slate-500 sm:block">
                Czech Republic uses inline flag rendering; the other regions use
                external file rendering.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
              {REGIONS.map((region) =>
                region.code === 'cz' ? (
                  <button
                    key={region.code}
                    type="button"
                    className="flex items-center gap-2 rounded-xl border border-blue-400 bg-blue-400/10 px-4 py-2 text-slate-100 shadow-lg shadow-blue-950/30"
                  >
                    <FlagCZ ariaLabel={region.label} className="h-4 w-6" />
                    <span>{region.label}</span>
                  </button>
                ) : (
                  <button
                    key={region.code}
                    type="button"
                    className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-slate-300"
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
            <div className="mb-4">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
                Content cards
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight">
                Article cards
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {ARTICLES.map((article) => (
                <article
                  key={article.title}
                  className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/30"
                >
                  <Pictogram
                    name={article.pictogram}
                    decorative
                    className="mb-5 size-14"
                  />
                  <h3 className="font-semibold text-slate-100">{article.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Colored pictogram served as an external SVG asset.
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Empty state */}
          <section className="rounded-3xl border border-dashed border-slate-700 bg-slate-950/60 p-10 text-center">
            <Illustration
              name="empty-state"
              ariaLabel="No results"
              className="mx-auto mb-4 h-36 w-auto"
            />
            <p className="text-sm font-medium text-slate-400">No results found.</p>
          </section>

          {/* XS sizing — flex layout must not stretch icon to full width */}
          <section className="grid gap-4 lg:grid-cols-2">
            <div
              id="xs-icon-demo"
              className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6"
            >
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
                Sizing contract
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight">
                XS icon sizing
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                The renderer fills the host; consumers own actual sizing.
              </p>
              <div
                className="mt-6 flex items-center justify-center rounded-2xl border border-slate-800 bg-slate-950 p-8"
                data-testid="xs-icon"
              >
                <Icon
                  name="square"
                  decorative
                  className={ICON_SIZE_PRESETS.xs.className}
                />
              </div>
            </div>

            {/* currentColor comparison — used by Playwright e2e */}
            <div
              id="current-color-demo"
              className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6"
            >
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
                Color behavior
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight">
                currentColor comparison
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                External <code>&lt;use&gt;</code> and inline rendering inherit
                color; native <code>&lt;img&gt;</code> keeps SVG internals isolated.
              </p>
              <div className="mt-6 flex items-center gap-8 rounded-2xl border border-slate-800 bg-slate-950 p-8">
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
            </div>
          </section>

          {/* 100× same icon — external-file DOM stays small */}
          <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
              Scale test
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight">
              100× same icon (external-file)
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
              Each render is a tiny &lt;svg&gt;&lt;use&gt;&lt;/use&gt;&lt;/svg&gt;
              wrapper. Path data lives once in the browser&apos;s parsed SVG cache,
              not 100 times in the DOM.
            </p>
            <div className="mt-6 flex flex-wrap gap-1 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              {Array.from({ length: 100 }, (_, i) => (
                <Icon key={i} name="square" decorative className="size-4 text-blue-300" />
              ))}
            </div>
          </section>
        </main>
      </div>
    </DesignAssetsProvider>
  );
}
