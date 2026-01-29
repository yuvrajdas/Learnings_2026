import { Component } from '@angular/core';

@Component({
  selector: 'app-deco-a',
  templateUrl: './deco-a.component.html',
  styleUrls: ['./deco-a.component.scss']
})
export class DecoAComponent {
  myDetails = {topic:"Decorator", version:"17"}
  childData:any;
  getData(e:any){
    console.log(e)
    this.childData = e;
  }
}
