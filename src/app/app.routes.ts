import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'main-menu', pathMatch: 'full' },
  {
    path: 'main-menu',
    loadComponent: () =>
      import('./scenes/main-menu/main-menu.cmp').then((m) => m.MainMenuCmp),
  },
  {
    path: 'select-mode',
    loadComponent: () =>
      import('./scenes/select-mode/select-mode.cmp').then(
        (m) => m.SelectModeCmp
      ),
  },
  {
    path: 'classic',
    loadComponent: () =>
      import('./scenes/classic/classic.cmp').then((m) => m.ClassicCmp),
  },
  {
    path: 'endless',
    loadComponent: () =>
      import('./scenes/endless/endless.cmp').then((m) => m.EndlessCmp),
  },
];
