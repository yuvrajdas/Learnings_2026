import { AbstractControl } from "@angular/forms";

export function validateContainerNumber(control:AbstractControl){
    let containerNo = control.value;
    console.log("con",control)
    if(['CUZPM1234567'].includes(containerNo)){
        return {validateContainerNumber:true}
    }else{
        return null;
    }
}

export function cardValidator(control:AbstractControl):Promise<any | null> {
    return new Promise((resolve)=>{
        if(control.value == 6789){
            resolve({visa:true})
        }else if(control.value == 1234){
            resolve({mastercard:true})
        }else{
            resolve(null)
        }
    })
}