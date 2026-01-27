import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-accessing-dom-element',
  templateUrl: './accessing-dom-element.component.html',
  styleUrls: ['./accessing-dom-element.component.scss']
})
export class AccessingDomElementComponent {

  @ViewChild('pcontent') pEle!:ElementRef<HTMLParagraphElement>;
  @ViewChildren('pselector') pSel!:QueryList<ElementRef<HTMLParagraphElement>>;
  ngOnInit(){
  }

  ngAfterViewInit(){
    console.log(this.pEle.nativeElement)

    console.log(this.pSel)
  }
}
