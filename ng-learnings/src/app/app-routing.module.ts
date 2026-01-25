import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TdfComponent } from './topics/forms/tdf/tdf.component';
import { ReactiveFormComponent } from './topics/forms/reactive-form/reactive-form.component';
import { FormComponent } from './topics/forms/form/form.component';
import { FormArrayComponent } from './topics/forms/form-array/form-array.component';
import { CustomValidatorComponent } from './topics/forms/custom-validator/custom-validator.component';


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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
