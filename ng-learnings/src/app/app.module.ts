import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TdfComponent } from './topics/forms/tdf/tdf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './topics/forms/reactive-form/reactive-form.component';
import { FormComponent } from './topics/forms/form/form.component';
import { FormArrayComponent } from './topics/forms/form-array/form-array.component';
import { CustomValidatorComponent } from './topics/forms/custom-validator/custom-validator.component';
import { AccessingDomElementComponent } from './topics/accessing-dom-element/accessing-dom-element.component';
import { AsyncPipeComponent } from './topics/async-pipe/async-pipe.component';
import { ChangeDetectionComponent } from './topics/changeDetectionStrategy/change-detection/change-detection.component';
import { CLifecycleComponent } from './topics/c-lifecycle/c-lifecycle.component';
import { ContentAComponent } from './topics/content-projection/content-a/content-a.component';
import { ContentBComponent } from './topics/content-projection/content-b/content-b.component';
import { CustomDirectiveComponent } from './topics/custom-directive/custom-directive.component';
import { HilightDirective } from './topics/custom-directive/hilight.directive';
import { CustomPipeComponent } from './topics/custom-pipe/custom-pipe.component';
import { ReversePipe } from './topics/custom-pipe/custom.pipe';
import { ParentAComponent } from './topics/Encapsulation/parent-a/parent-a.component';
import { ChildBComponent } from './topics/Encapsulation/child-b/child-b.component';
import { HostBindingComponent } from './topics/host-binding/host-binding.component';
import { HostBindingExample } from './topics/host-binding/hostbinding.example';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './topics/interceptor/auth.interceptor';
import { ApiCallComponent } from './topics/tasks/api-call/api-call.component';
import { CrudPaginationComponent } from './topics/tasks/crud-pagination/crud-pagination.component';
import { ResolverComponent } from './topics/resolver-example/resolver/resolver.component';
import { HomeComponent } from './topics/routings/home/home.component';
import { ContactComponent } from './topics/routings/contact/contact.component';
import { AboutUsComponent } from './topics/routings/about-us/about-us.component';
import { DashboardComponent } from './topics/auth-guard-ex/dashboard/dashboard.component';
import { PersonalDetailsComponent } from './topics/auth-guard-ex/personal-details/personal-details.component'; 
import { LazyLoadingStrategyModule } from './topics/loading-strategy/lazyloading.strategy.module';
import { SignalsComponent } from './topics/signals/signals.component';
import { LazyLoadComponentWithoutRoutingComponent } from './topics/exceptional-topics/lazy-load-component-without-routing/lazy-load-component-without-routing.component';
import { LazyLoadableComComponent } from './topics/exceptional-topics/lazy-loadable-com/lazy-loadable-com.component';
import { DecoAComponent } from './topics/decorators/deco-a/deco-a.component';
import { DecoBComponent } from './topics/decorators/deco-b/deco-b.component';

@NgModule({
  declarations: [
    AppComponent,
    TdfComponent,
    ReactiveFormComponent,
    FormComponent,
    FormArrayComponent,
    CustomValidatorComponent,
    AccessingDomElementComponent,
    AsyncPipeComponent,
    ChangeDetectionComponent,
    CLifecycleComponent,
    ContentAComponent,
    ContentBComponent,
    CustomDirectiveComponent,
    HilightDirective,
    CustomPipeComponent,
    ReversePipe,
    ParentAComponent,
    ChildBComponent,
    HostBindingComponent,
    HostBindingExample,
    ApiCallComponent,
    CrudPaginationComponent,
    ResolverComponent,
    HomeComponent,
    ContactComponent,
    AboutUsComponent,
    DashboardComponent,
    PersonalDetailsComponent,
    SignalsComponent,
    LazyLoadComponentWithoutRoutingComponent,
    LazyLoadableComComponent,
    DecoAComponent,
    DecoBComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
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
