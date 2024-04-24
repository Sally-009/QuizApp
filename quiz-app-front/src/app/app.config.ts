import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(routes),
    provideClientHydration(),
  ],
};

/*
  Modified appConfig to include HttpClientModule
  this will allow the app to use the HttpClient service.

  Also added importProvidersFrom to import providers from HttpClientModule
  and provideClientHydration to provide client hydration
*/
