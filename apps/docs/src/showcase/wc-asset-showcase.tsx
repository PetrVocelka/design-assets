import { createElement, type ReactNode } from 'react';
import { ShowcaseShell, type Theme } from './showcase-shell';
import type { SizePresetEntry } from '../stories/story-helpers';

type WcCategory = 'icons' | 'pictograms' | 'illustrations' | 'brand' | 'flags';

const WC_TAGS: Record<WcCategory, string> = {
  icons: 'da-icon',
  pictograms: 'da-pictogram',
  illustrations: 'da-illustration',
  brand: 'da-brand-asset',
  flags: 'da-flag',
};

const WC_NAME_ATTR: Record<WcCategory, string> = {
  icons: 'name',
  pictograms: 'name',
  illustrations: 'name',
  brand: 'name',
  flags: 'country-code',
};

interface WcAssetShowcaseProps {
  category: WcCategory;
  name: string;
  size: string;
  theme: Theme;
  decorative: boolean;
  ariaLabel: string;
  sizePresets: Record<string, SizePresetEntry>;
  intro: ReactNode;
}

function wcSnippet(
  tag: string,
  name: string,
  nameAttr: string,
  className: string,
  decorative: boolean,
  ariaLabel: string,
): string {
  const attrs = [`${nameAttr}="${name}"`, `class="${className}"`];
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
  decorative,
  ariaLabel,
  sizePresets,
  intro,
}: WcAssetShowcaseProps) {
  const tag = WC_TAGS[category];
  const nameAttr = WC_NAME_ATTR[category];
  const selected = sizePresets[size] ?? Object.values(sizePresets)[0]!;
  const snippet = wcSnippet(tag, name, nameAttr, selected.className, decorative, ariaLabel);

  const elementProps: Record<string, string | boolean> = {
    [nameAttr]: name,
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
          <code>@design-assets/web-components</code> ·{' '}
          {decorative ? 'decorative' : `labelled (“${ariaLabel}”)`}
        </>
      }
      snippet={snippet}
    >
      {createElement(tag, elementProps)}
    </ShowcaseShell>
  );
}
