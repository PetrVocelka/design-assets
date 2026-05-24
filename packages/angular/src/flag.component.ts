import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { getFlagHref, manifest, type CountryCode } from '@design-assets/core';

import { resolveA11yInputs } from './a11y';
import {
  DESIGN_ASSETS_CONFIG,
  resolveConfiguredHref,
  resolveVersionTag,
} from './design-assets-config';

@Component({
  selector: 'da-ng-flag',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      [attr.viewBox]="viewBox()"
      [class]="className()"
      [attr.aria-hidden]="a11y().ariaHidden === true ? true : null"
      [attr.role]="a11y().role ?? null"
      [attr.aria-label]="a11y().ariaLabel ?? null"
      focusable="false"
    >
      <use [attr.href]="href()" [attr.xlink:href]="href()" />
    </svg>
  `,
})
export class FlagComponent {
  readonly countryCode = input.required<CountryCode>();
  readonly className = input<string>('', { alias: 'class' });
  readonly decorative = input<boolean | undefined>(undefined);
  readonly ariaLabel = input<string | undefined>(undefined);
  readonly baseUrl = input<string | undefined>(undefined);
  readonly versionTag = input<string | null | undefined>(undefined);

  private readonly config = inject(DESIGN_ASSETS_CONFIG);

  protected readonly viewBox = computed(
    () => manifest[`flags/${this.countryCode()}`]?.viewBox ?? '0 0 640 480',
  );

  protected readonly href = computed(() => {
    const name = this.countryCode();
    const baseUrl = this.baseUrl() ?? this.config.baseUrl;
    const versionTag = resolveVersionTag(this.config.versionTag, this.versionTag());
    const defaultHref = getFlagHref(name, baseUrl, versionTag);

    return resolveConfiguredHref(this.config, {
      category: 'flags',
      name,
      baseUrl,
      versionTag,
      defaultHref,
    });
  });

  protected readonly a11y = computed(() =>
    resolveA11yInputs(this.decorative(), this.ariaLabel()),
  );
}
