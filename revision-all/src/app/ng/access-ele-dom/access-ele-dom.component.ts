import { ViewEncapsulation } from '@angular/compiler';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-access-ele-dom',
  templateUrl: './access-ele-dom.component.html',
  styleUrls: ['./access-ele-dom.component.scss'],
})
export class AccessEleDomComponent {
  @ViewChild('p') pEle!:ElementRef<HTMLParagraphElement>;

  ngAfterViewInit(){
    
  }
}
