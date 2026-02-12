import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'caps'
})
export class CustomPipe implements PipeTransform{

    transform(value:string){
        return  value.toUpperCase();
    }
}