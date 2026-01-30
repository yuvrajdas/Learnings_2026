import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsAllComponent } from './rxjs/rxjs-all/rxjs-all.component';
import { TestComponent } from './rxjs/test/test.component';
import { HilightDirective } from './ng/custom-directive/hilight.directive';
import { ReverseStringPipe } from './ng/custom-pipe/reverse.pipe';
import { AccessEleDomComponent } from './ng/access-ele-dom/access-ele-dom.component';
import { LinkHilighDirective } from './ng/host-binding/link.hilight.directive';
import { UserDetialsComponent } from './ng/user-detials/user-detials.component';
import { TdfComponent } from './ng/forms/tdf/tdf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RxjsAllComponent,
    TestComponent,
    HilightDirective,
    ReverseStringPipe,
    AccessEleDomComponent,
    LinkHilighDirective,
    UserDetialsComponent,
    TdfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
