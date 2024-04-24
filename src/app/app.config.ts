import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter, RouterModule} from '@angular/router';

import { routes } from './app.routes';

let APP_ROUTES;
export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(RouterModule.forRoot(routes, {
    initialNavigation: 'disabled',
    // Restores the previous scroll position on backward navigation, else sets the position to the anchor if one is
    // provided, or sets the scroll position to [0, 0] (forward navigation).
    scrollPositionRestoration: 'enabled',
    canceledNavigationResolution: 'computed'
  }))]
};
