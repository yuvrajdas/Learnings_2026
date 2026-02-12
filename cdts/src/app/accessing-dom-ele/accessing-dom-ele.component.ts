import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-accessing-dom-ele',
  templateUrl: './accessing-dom-ele.component.html',
  styleUrls: ['./accessing-dom-ele.component.scss']
})
export class AccessingDomEleComponent {

  @ViewChild('p', {static:true}) pEle!:ElementRef<HTMLParagraphElement>;
  @ViewChildren('li') liEle!:QueryList<ElementRef<HTMLLIElement>>;

  ngOnInit(): void {
     
    // console.log("this.pEle.nativeElement", this.pEle.nativeElement);
    
  }

  ngAfterViewInit(): void {
      // console.log()
      // ;
      this.liEle.forEach((e=>{
        console.log("ele",e.nativeElement);
        
      }))
      
  }

}
