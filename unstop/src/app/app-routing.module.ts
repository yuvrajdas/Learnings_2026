import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutesPathEnum } from './shared/app-routes.enum';
import { UserDashboardComponent } from './views/user-dashboard/user-dashboard.component';
import { PageNotFoundComponent } from './generic-components/page-not-found/page-not-found.component';

const getRoute =(routeName: AppRoutesPathEnum)=>routeName.replace('/', '');
const routes: Routes = [
  {
    path: '',
    redirectTo: getRoute(AppRoutesPathEnum.HOME),
    pathMatch: 'full'
  },
  {
    path: getRoute(AppRoutesPathEnum.HOME),
    component: UserDashboardComponent
  },
  {
    path: getRoute(AppRoutesPathEnum.USER_DASHBOARD),
    component: UserDashboardComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
