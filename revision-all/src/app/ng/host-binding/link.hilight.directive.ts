import { Directive, HostBinding } from "@angular/core";

@Directive({
    selector:'[linkHilight]'
})
export class LinkHilighDirective{
    @HostBinding('style.color') myColor = 'red';
}