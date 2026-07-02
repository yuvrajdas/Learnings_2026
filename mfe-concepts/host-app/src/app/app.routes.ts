import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'records',
    loadComponent: () =>
      import('./records-remote/records-remote').then(
        (m) => m.RecordsRemoteComponent,
      ),
  },
];
