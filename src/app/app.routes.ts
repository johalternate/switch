import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'main-menu', pathMatch: 'full' },
  {
    path: 'main-menu',
    loadComponent: () =>
      import('./scenes/main-menu/main-menu.cmp').then((m) => m.MainMenuCmp),
  },
];
