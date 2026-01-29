import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromiseVsObservableComponent } from './promise-vs-observable/promise-vs-observable.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { HigherOrderObservableComponent } from './higher-order-observable/higher-order-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    PromiseVsObservableComponent,
    SubjectsComponent,
    HigherOrderObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
