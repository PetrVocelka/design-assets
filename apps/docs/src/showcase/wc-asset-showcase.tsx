import { createElement, type ReactNode } from 'react';
import { ShowcaseShell, type RenderMode, type Theme } from './showcase-shell';
import type { SizePresetEntry } from '../stories/story-helpers';

type WcCategory = 'icons' | 'pictograms' | 'illustrations' | 'brand' | 'flags';

interface WcAssetShowcaseProps {
  category: WcCategory;
  name: string;
  size: string;
  theme: Theme;
  renderMode: Exclude<RenderMode, 'inline'>;
  decorative: boolean;
  ariaLabel: string;
  sizePresets: Record<string, SizePresetEntry>;
  intro: ReactNode;
}

function wcSnippet(
  renderMode: Exclude<RenderMode, 'inline'>,
  category: WcCategory,
  name: string,
  className: string,
  decorative: boolean,
  ariaLabel: string,
): string {
  const tag = renderMode === 'img' ? 'da-asset-img' : 'da-asset-use';
  const attrs = [`category="${category}"`, `name="${name}"`, `class="${className}"`];
  if (decorative) {
    attrs.push('decorative');
  } else {
    attrs.push(`aria-label="${ariaLabel}"`);
  }
  return `<${tag} ${attrs.join(' ')}></${tag}>`;
}

export function WcAssetShowcase({
  category,
  name,
  size,
  theme,
  renderMode,
  decorative,
  ariaLabel,
  sizePresets,
  intro,
}: WcAssetShowcaseProps) {
  const tag = renderMode === 'img' ? 'da-asset-img' : 'da-asset-use';
  const selected = sizePresets[size] ?? Object.values(sizePresets)[0]!;
  const snippet = wcSnippet(renderMode, category, name, selected.className, decorative, ariaLabel);

  const elementProps: Record<string, string | boolean> = {
    category,
    name,
    class: selected.className,
  };
  if (decorative) {
    elementProps.decorative = true;
  } else {
    elementProps['aria-label'] = ariaLabel;
  }

  return (
    <ShowcaseShell
      intro={intro}
      theme={theme}
      meta={
        <>
          <code>{name}</code> · <code>{selected.token}</code> ·{' '}
          <code>{renderMode === 'img' ? '<da-asset-img>' : '<da-asset-use>'}</code> ·{' '}
          {decorative ? 'decorative' : `labelled (“${ariaLabel}”)`}
        </>
      }
      snippet={snippet}
    >
      {createElement(tag, elementProps)}
    </ShowcaseShell>
  );
}
