import { Component } from '@angular/core';

@Component({
  selector: 'app-c-lifecycle',
  templateUrl: './c-lifecycle.component.html',
  styleUrls: ['./c-lifecycle.component.scss']
})
export class CLifecycleComponent {

  /**
   * Component Lifecycles : 
   * 1. ngOnChanges : executes whenever the input property change
   * 2. ngOnInit : execute when the component is completely initialized
   * 3. ngDOCheck : executes whenever the components property change
   * 4. ngAfterContentInit : execute when the projected content is initialized
   * 5. ngAfterContentChecked : executes when projected content has any change
   * 6. ngAfterViewInit : execute when the dom is completly loaded
   * 7. ngAfterViewChecked : execute when any updated hppen on the template/DOM
   * 8 ngDestroy : execute when the component is destory.
   * 
  */
}
