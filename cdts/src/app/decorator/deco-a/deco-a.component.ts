import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-deco-a',
  templateUrl: './deco-a.component.html',
  styleUrls: ['./deco-a.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class DecoAComponent {

  cData:string = ''
  getData(data:any){
    this.cData = data;
  }
}
