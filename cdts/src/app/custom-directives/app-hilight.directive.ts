import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";
@Directive({
    selector:'[appHilight]'
})

export class AppHilightDirective{

    constructor(private eleRef:ElementRef){

    }

    // @HostBinding('style.color') color = 'red' 
    @HostBinding('attr.title') title:string = "hello title"

    // @HostListener('mouseenter') onMouseEnter(){
    //     this.eleRef.nativeElement.style.color = 'red';
    // }

    // @HostListener('mouseleave') onMouseLeave(){
    //     this.eleRef.nativeElement.style.color = 'black'
    // }
}