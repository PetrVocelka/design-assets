import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { DomSanitizer, type SafeHtml } from '@angular/platform-browser';

import { resolveA11yInputs } from '../../src/a11y';

export interface InlineSpec {
  viewBox: string;
  innerHtml: string;
  colorMode: 'monochrome' | 'colored';
}

@Component({
  selector: 'design-asset-inline',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      [attr.viewBox]="spec().viewBox"
      [class]="className()"
      [attr.fill]="fill()"
      [attr.stroke]="stroke()"
      [attr.aria-hidden]="a11y().ariaHidden === true ? true : null"
      [attr.role]="a11y().role ?? null"
      [attr.aria-label]="a11y().ariaLabel ?? null"
      focusable="false"
      [innerHTML]="safeInnerHtml()"
    ></svg>
  `,
})
export class InlineAssetComponent {
  readonly spec = input.required<InlineSpec>();
  readonly className = input<string>('', { alias: 'class' });
  readonly decorative = input<boolean | undefined>(undefined);
  readonly ariaLabel = input<string | undefined>(undefined);

  private readonly sanitizer = inject(DomSanitizer);

  protected readonly fill = computed(() =>
    this.spec().colorMode === 'monochrome' ? 'none' : null,
  );

  protected readonly stroke = computed(() =>
    this.spec().colorMode === 'monochrome' ? 'currentColor' : null,
  );

  protected readonly a11y = computed(() =>
    resolveA11yInputs(this.decorative(), this.ariaLabel()),
  );

  protected readonly safeInnerHtml = computed((): SafeHtml =>
    this.sanitizer.bypassSecurityTrustHtml(this.spec().innerHtml),
  );
}
