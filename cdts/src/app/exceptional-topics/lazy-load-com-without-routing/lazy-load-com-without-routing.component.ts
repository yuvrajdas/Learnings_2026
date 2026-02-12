import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-lazy-load-com-without-routing',
  templateUrl: './lazy-load-com-without-routing.component.html',
  styleUrls: ['./lazy-load-com-without-routing.component.scss']
})
export class LazyLoadComWithoutRoutingComponent {
  
  @ViewChild('container', {read:ViewContainerRef}) container!:ViewContainerRef 


  async loadCom(){
    // const {LazyLoadableComComponent} = await import('../lazy-loadable-com/lazy-loadable-com.component')
    // this.container.createComponent(LazyLoadableComComponent)
    this.container.clear();
    // await import('../lazy-module/lazy.module')
    const {LazyCComponent} = await import('../lazy-module/lazy-c/lazy-c.component')
    this.container.createComponent(LazyCComponent)
  }
}
