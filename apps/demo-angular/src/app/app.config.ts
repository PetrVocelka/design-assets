import { ApplicationConfig } from '@angular/core';
import { provideDesignAssets } from '@design-assets/angular';

export const appConfig: ApplicationConfig = {
  providers: [provideDesignAssets({ baseUrl: '/design-assets' })],
};
