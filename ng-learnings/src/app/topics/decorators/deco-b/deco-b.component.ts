import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-deco-b',
  templateUrl: './deco-b.component.html',
  styleUrls: ['./deco-b.component.scss']
})
export class DecoBComponent {

  @Input() details:any;
  @Output() evnt = new EventEmitter<any>();

  sendToParent(){
    this.evnt.emit('Hello from child');
  }
}
