import { Component } from '@angular/core';
import { IconComponent, PictogramComponent } from '@design-assets/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IconComponent, PictogramComponent],
  template: `
    <main class="page">
      <h1>Angular Demo</h1>
      <p>
        Typed components from
        <code>&#64;design-assets/angular</code> — external SVG via
        <code>&lt;use href&gt;</code>.
      </p>

      <section>
        <h2>Icons</h2>
        <div class="icon-grid">
          @for (name of icons; track name) {
            <design-asset-icon [name]="name" class="icon" decorative />
          }
        </div>
      </section>

      <section>
        <h2>Pictogram</h2>
        <design-asset-pictogram name="school" class="pictogram" decorative />
      </section>
    </main>
  `,
})
export class AppComponent {
  protected readonly icons = [
    'square',
    'circle',
    'triangle',
    'diamond',
    'plus',
    'arrow-right',
  ] as const;
}
