import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';

import {
  DEFAULT_DIALOG_CONFIG,
  DialogConfig,
  DialogModule,
} from '@angular/cdk/dialog';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    importProvidersFrom(DialogModule),
    {
      provide: DEFAULT_DIALOG_CONFIG,
      useValue: {
        backdropClass: 'backdrop-dark',
        hasBackdrop: true,
      } satisfies DialogConfig,
    },
  ],
};
