import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TdfComponent } from './topics/tdf/tdf.component';
import { ReactiveFormComponent } from './topics/reactive-form/reactive-form.component';


const routes: Routes = [
  {
    path:'tdf',
    component:TdfComponent
  },
  {
    path:'reactive-form',
    component:ReactiveFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
