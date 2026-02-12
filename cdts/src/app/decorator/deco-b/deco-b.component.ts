import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-deco-b',
  templateUrl: './deco-b.component.html',
  styleUrls: ['./deco-b.component.scss']
})
export class DecoBComponent {

  @Input() data:string = '';
  @Output() evnt = new EventEmitter();


  send(){
    this.evnt.emit("data from child")
  }
}
