import { NgModule } from '@angular/core'; 
import {Routes, RouterModule, PreloadAllModules } from '@angular/router'
import { ProtectedComEx } from './auth-guard-ex/protectedcom.component';
import { AuthGuard } from './auth-guard-ex/AuthGuard';
import { ResolverComComponent } from './resolver/resolver-com/resolver-com.component';
import { UserResolverService } from './resolver/user-resolver.service';

const routes: Routes = [
  {
    path:'pce',
    canActivate:[AuthGuard],
    component:ProtectedComEx,
    canActivateChild:[AuthGuard],
    children:[
      {
        path:'child-m',
        loadChildren:()=>import('./auth-guard-ex/test-child-module/test.child.module').then((m)=>m.TestChildModule)
      }
    ]
  },

  {
    path:'resolver',
    component:ResolverComComponent,
    resolve:{userData:UserResolverService}
  },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
