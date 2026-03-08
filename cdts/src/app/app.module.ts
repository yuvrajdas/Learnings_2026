import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchSortPaginationComponent } from './search-sort-pagination/search-sort-pagination.component'; 
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { TestComponent } from './interceptor/test.component';
import { AccessingDomEleComponent } from './accessing-dom-ele/accessing-dom-ele.component';
import { ProtectedComEx } from './auth-guard-ex/protectedcom.component';
import { CLifecycleComponent } from './c-lifecycle/c-lifecycle.component';
import { CdsComponent } from './cds/cds.component';
import { AComComponent } from './content-projection/a-com/a-com.component';
import { BComComponent } from './content-projection/b-com/b-com.component';
import { AppHilightDirective } from './custom-directives/app-hilight.directive';
import { CustomPipe } from './custom-pipe/custom.pipe';
import { DecoAComponent } from './decorator/deco-a/deco-a.component';
import { DecoBComponent } from './decorator/deco-b/deco-b.component';
import { LazyLoadComWithoutRoutingComponent } from './exceptional-topics/lazy-load-com-without-routing/lazy-load-com-without-routing.component';
import { LazyLoadableComComponent } from './exceptional-topics/lazy-loadable-com/lazy-loadable-com.component';
import { TdfComponent } from './forms/tdf/tdf.component';
import { RfComponent } from './forms/rf/rf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncValComponent } from './forms/async-val/async-val.component';
import { SingnalsExComponent } from './singnals-ex/singnals-ex.component';
import { ResolverComComponent } from './resolver/resolver-com/resolver-com.component';
import { RxjsExComponent } from './_1rxjs/rxjs-ex/rxjs-ex.component';
import { ValueRestrictorDirective } from './custom-directives/value-restrictor.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchSortPaginationComponent,
    InfiniteScrollComponent,
    TestComponent,
    AccessingDomEleComponent,
    ProtectedComEx,
    CLifecycleComponent,
    CdsComponent,
    AComComponent,
    BComComponent,
    AppHilightDirective,
    CustomPipe,
    DecoAComponent,
    DecoBComponent,
    LazyLoadComWithoutRoutingComponent,
    LazyLoadableComComponent,
    TdfComponent,
    RfComponent,
    AsyncValComponent,
    SingnalsExComponent,
    ResolverComComponent,
    RxjsExComponent,
    ValueRestrictorDirective
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { 
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
