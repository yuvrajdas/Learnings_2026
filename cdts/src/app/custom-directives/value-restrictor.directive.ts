import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appValueRestrictor]'
})
export class ValueRestrictorDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input')
  onInput() {
    const value: string = this.el.nativeElement.value;

    if (value.toLowerCase().includes('apple')) {
      // Remove the word "Apple"
      (document.getElementById('msg') as HTMLSpanElement).innerText = 'Apple cannot be added'
    }else{
      (document.getElementById('msg') as HTMLSpanElement).innerText = ''

    }                                                               
  }
}
