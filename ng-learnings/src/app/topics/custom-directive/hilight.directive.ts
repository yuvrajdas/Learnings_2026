import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector:'[appHilight]'
})
export class HilightDirective{
    constructor(private eleRef : ElementRef){}

    @HostListener('mouseenter') onMouseEnter(){
        this.eleRef.nativeElement.style.color = 'red';

    }

    @HostListener('mouseleave') onMouseLeave(){
        this.eleRef.nativeElement.style.color = 'black'
    }
}