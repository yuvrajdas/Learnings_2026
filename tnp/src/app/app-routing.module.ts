import { NgModule } from '@angular/core'; 
import {Routes, RouterModule, PreloadAllModules } from '@angular/router'
import { AuthGuard } from './topic/auth-guard/auth.gurd';
import { HomeComponent } from './topic/home/home.component';
import { DetailsComponent } from './topic/details/details.component';
const routes: Routes = [ 
  {
    path:"home",
    canActivate:[AuthGuard],
    canActivateChild:[AuthGuard],
    component:HomeComponent,
    children:[
      {
        path:'details',
        component:DetailsComponent
      }
    ]
  }
];

@NgModule({
  imports:[RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})],
  exports:[RouterModule],
})

export class AppRoutingModule{}