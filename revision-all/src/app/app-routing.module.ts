import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserResolverService } from './ng/service/userresolver.service';
import { UserDetialsComponent } from './ng/user-detials/user-detials.component';

const routes: Routes = [
  {
    path:'something',
    component:UserDetialsComponent,
    // canActivate:[],
    resolve:{userData:UserResolverService}
  },
  {
    path:'hello',
    loadChildren:()=>import('./ng/module-eg/test.module').then((m)=>m.TestModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
