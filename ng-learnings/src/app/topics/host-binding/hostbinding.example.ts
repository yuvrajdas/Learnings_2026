import { Directive, HostBinding } from "@angular/core";

@Directive({
    selector:'[myDirective]'
})
export class HostBindingExample {

    // @HostBinding('style.color') mystyle:string = 'red'
    @HostBinding('style.backgroundColor') myStyle:string = 'yellow'
    @HostBinding('class.active') isActive:boolean = true
    @HostBinding('attr.title') title:string = 'this is my title'


}