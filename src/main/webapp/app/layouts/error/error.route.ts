import { Routes } from '@angular/router';

import { ErrorComponent } from './error.component';

export const errorRoute: Routes = [
  {
    path: 'error',
    component: ErrorComponent,
    data: {
      pageTitle: 'Foutpagina!',
    },
  },
  {
    path: 'accessdenied',
    component: ErrorComponent,
    data: {
      pageTitle: 'Foutpagina!',
      errorMessage: 'U bent niet bevoegd om de pagina te openen.',
    },
  },
  {
    path: '404',
    component: ErrorComponent,
    data: {
      pageTitle: 'Foutpagina!',
      errorMessage: 'De pagina bestaat niet.',
    },
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];
