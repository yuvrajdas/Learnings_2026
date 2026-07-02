import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestrictValue } from './topic/directives/restrict.value.decorator';
import { AuthGuard } from './topic/auth-guard/auth.gurd';
import { HomeComponent } from './topic/home/home.component';
import { DetailsComponent } from './topic/details/details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RestrictValue,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})

export class AppModule { }
