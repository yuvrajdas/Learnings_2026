import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TdfComponent } from './topics/forms/tdf/tdf.component';
import { ReactiveFormComponent } from './topics/forms/reactive-form/reactive-form.component';
import { FormComponent } from './topics/forms/form/form.component';
import { FormArrayComponent } from './topics/forms/form-array/form-array.component';
import { CustomValidatorComponent } from './topics/forms/custom-validator/custom-validator.component';
import { ResolverComponent } from './topics/resolver-example/resolver/resolver.component';
import { UserResolverService } from './topics/resolver-example/resolver-service/user.resolver.service';
import { HomeComponent } from './topics/routings/home/home.component';
import { AboutUsComponent } from './topics/routings/about-us/about-us.component';
import { ContactComponent } from './topics/routings/contact/contact.component';
import { DashboardComponent } from './topics/auth-guard-ex/dashboard/dashboard.component';
import { AuthGuardService } from './topics/auth-guard-ex/auth.guard';
import { PersonalDetailsComponent } from './topics/auth-guard-ex/personal-details/personal-details.component';


const routes: Routes = [
  {
    path:'form',
    component:FormComponent,
    children:[
      // {
      //   path:'',
      //   redirectTo:'tdf',
      //   pathMatch:'full'
      // },
      {
        path:'tdf',
        component:TdfComponent
      },
      {
        path:'reactive-form',
        component:ReactiveFormComponent
      },
      {
        path:'form-array',
        component:FormArrayComponent
      },
      {
        path:'custom-validator',
        component:CustomValidatorComponent
      },
    ]
  },
  {
    path:'resolver',
    component:ResolverComponent,
    resolve:{userData:UserResolverService}
  },
  {
    path:'routing',
    component:HomeComponent,
    children:[
      {
        path:'about-us',
        component:AboutUsComponent
      },
      {
        path:'contact/:id/name',
        component:ContactComponent
      }
    ]
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AuthGuardService],
    canActivateChild:[AuthGuardService],
    children:[
      {
        path:'details',
        component:PersonalDetailsComponent
      }
    ]
  },
  {
    path:'lazy-loading',
    loadChildren:()=>import('./topics/loading-strategy/lazyloading.strategy.module').then((m)=>m.LazyLoadingStrategyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
