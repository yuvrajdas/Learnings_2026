import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TdfComponent } from './topics/forms/tdf/tdf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './topics/forms/reactive-form/reactive-form.component';
import { FormComponent } from './topics/forms/form/form.component';
import { FormArrayComponent } from './topics/forms/form-array/form-array.component';

@NgModule({
  declarations: [
    AppComponent,
    TdfComponent,
    ReactiveFormComponent,
    FormComponent,
    FormArrayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
