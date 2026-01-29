import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-lazy-load-component-without-routing',
  templateUrl: './lazy-load-component-without-routing.component.html',
  styleUrls: ['./lazy-load-component-without-routing.component.scss']
})
export class LazyLoadComponentWithoutRoutingComponent {
  @ViewChild('container' , {read:ViewContainerRef}) container!:ViewContainerRef;

  async loadComponent(){
    const {LazyLoadableComComponent } = await import('../lazy-loadable-com/lazy-loadable-com.component')
    this.container.createComponent(LazyLoadableComComponent)
  }
}
