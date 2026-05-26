import { ApplicationConfig } from '@angular/core';
import { provideDesignAssets } from '@petrvocelka/design-assets-angular';

export const appConfig: ApplicationConfig = {
  providers: [provideDesignAssets({ baseUrl: '/design-assets' })],
};
