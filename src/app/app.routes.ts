import { Routes } from '@angular/router';
import { Login } from './features/auth/pages/login/login';
import { MainLayout } from './layout/main-layout/main-layout';
import { ListJobs } from './features/applicant/pages/list-jobs/list-jobs';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'aplicante',
        data: { role: 'applicant' },
        children: [
          {
            path: '',
            component: ListJobs,
          },
        ],
      },
    ],
  },
  {
    path: 'login',
    component: Login,
  },
];
