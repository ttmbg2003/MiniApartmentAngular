import { Routes } from '@angular/router';
import TenantView from '../tenant/tenant.component'
import ProfileView from '../myprofile/myprofile.component'
export const routes: Routes = [
  {
    path: 'tenant',
    component: TenantView,
  },
  {
    path: 'profile',
    component: ProfileView,
  }
];
