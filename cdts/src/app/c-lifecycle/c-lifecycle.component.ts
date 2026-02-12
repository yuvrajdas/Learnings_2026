import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-c-lifecycle',
  templateUrl: './c-lifecycle.component.html',
  styleUrls: ['./c-lifecycle.component.scss'],
})
export class CLifecycleComponent {
  /**
   * Lifecycle : from initialization to destory component goes through a serveral phases that phases known as lifycycle method
   * In angular there are 8 type of lifecycle methods.
   * 
   *ngOnChanges – Runs when @Input() values change.

    ngOnInit – Runs once after component initialization.

    ngDoCheck – Runs on every change detection cycle.

    ngAfterContentInit – Runs once after content projection is initialized.

    ngAfterContentChecked – Runs after projected content is checked.

    ngAfterViewInit – Runs once after component view & child views initialize.

    ngAfterViewChecked – Runs after view is checked.

    ngOnDestroy – Runs before component is destroyed.
   * 
   * */ 
}
