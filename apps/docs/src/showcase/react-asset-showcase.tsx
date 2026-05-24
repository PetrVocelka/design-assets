import type { ComponentType, ReactNode } from 'react';
import * as InlineAssets from '@design-assets/react/inline';
import {
  inlineComponentName,
  ShowcaseShell,
  type RenderMode,
  type Theme,
} from './showcase-shell';
import type { SizePresetEntry } from '../stories/story-helpers';

type InlineProps = {
  decorative?: true;
  ariaLabel?: string;
  className?: string;
};

export interface ReactAssetShowcaseProps {
  name: string;
  size: string;
  theme: Theme;
  renderMode: RenderMode;
  decorative: boolean;
  ariaLabel: string;
}

interface ReactAssetShowcaseConfig {
  inlineCategory: string;
  reactExport: string;
  nameProp?: 'name' | 'countryCode';
  sizePresets: Record<string, SizePresetEntry>;
  intro: ReactNode;
  ExternalComponent: ComponentType<
    Record<string, unknown> & { className?: string; decorative?: true; ariaLabel?: string }
  >;
}

function resolveInlineComponent(category: string, name: string): ComponentType<InlineProps> {
  const componentName = inlineComponentName(category, name);
  const InlineComponent = InlineAssets[componentName as keyof typeof InlineAssets];

  if (typeof InlineComponent !== 'function') {
    throw new Error(`Missing inline component for "${name}" (${componentName})`);
  }

  return InlineComponent as ComponentType<InlineProps>;
}

function reactSnippet(
  config: ReactAssetShowcaseConfig,
  name: string,
  renderMode: RenderMode,
  decorative: boolean,
  ariaLabel: string,
  className: string,
): string {
  const nameProp = config.nameProp ?? 'name';
  const propAssignment = `${nameProp}="${name}"`;

  if (renderMode === 'inline') {
    const component = inlineComponentName(config.inlineCategory, name);
    return decorative
      ? `import { ${component} } from '@design-assets/react/inline';\n\n<${component} className="${className}" />`
      : `import { ${component} } from '@design-assets/react/inline';\n\n<${component} ariaLabel="${ariaLabel}" className="${className}" />`;
  }

  return decorative
    ? `import { ${config.reactExport} } from '@design-assets/react';\n\n<${config.reactExport} ${propAssignment} className="${className}" />`
    : `import { ${config.reactExport} } from '@design-assets/react';\n\n<${config.reactExport} ${propAssignment} ariaLabel="${ariaLabel}" className="${className}" />`;
}

export function createReactAssetShowcase(config: ReactAssetShowcaseConfig) {
  function ReactAssetShowcase({
    name,
    size,
    theme,
    renderMode,
    decorative,
    ariaLabel,
  }: ReactAssetShowcaseProps) {
    const selected = config.sizePresets[size] ?? Object.values(config.sizePresets)[0]!;
    const nameProp = config.nameProp ?? 'name';
    const snippet = reactSnippet(
      config,
      name,
      renderMode,
      decorative,
      ariaLabel,
      selected.className,
    );

    let preview: ReactNode;
    const externalProps = {
      [nameProp]: name,
      className: selected.className,
      ...(decorative ? {} : { ariaLabel }),
    };

    if (renderMode === 'inline') {
      const InlineComponent = resolveInlineComponent(config.inlineCategory, name);
      preview = decorative ? (
        <InlineComponent className={selected.className} />
      ) : (
        <InlineComponent ariaLabel={ariaLabel} className={selected.className} />
      );
    } else {
      preview = <config.ExternalComponent {...externalProps} />;
    }

    return (
      <ShowcaseShell
        intro={config.intro}
        theme={theme}
        meta={
          <>
            <code>{name}</code> · <code>{selected.token}</code> ({selected.pixels}px) ·{' '}
            {renderMode === 'external' ? 'external `<use href>`' : 'inline bundle'} ·{' '}
            {decorative ? 'decorative' : `labelled (“${ariaLabel}”)`} · {theme} theme
          </>
        }
        snippet={snippet}
      >
        {preview}
      </ShowcaseShell>
    );
  }

  return ReactAssetShowcase;
}
