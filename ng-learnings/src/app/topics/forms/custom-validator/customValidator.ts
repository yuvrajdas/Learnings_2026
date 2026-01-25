import { AbstractControl } from "@angular/forms";

export function panCardValidator(control:AbstractControl){
    const panNo = control.value.toString();
    const ffc = panNo.substring(0, 5);
    const num = panNo.substring(ffc, ffc.length+4);
    const lastChar = panNo.substring(panNo.length-1);

    if(panNo.length<10){
        return {panCardValidator:true}
    }
}