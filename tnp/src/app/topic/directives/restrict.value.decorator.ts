import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector:'[restrictValue]'
})

export class RestrictValue{

    @Input('restrictValue') restrictValue:string = ''

    constructor(private ele:ElementRef){

    }

    @HostListener('input', ['$event']) onInput(e:any){

        if(this.restrictValue === 'admin'){
            alert('this is not allowed')
        }
        console.log(this.restrictValue);
    }

}