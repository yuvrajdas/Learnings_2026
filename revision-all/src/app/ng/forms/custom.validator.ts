import { AbstractControl } from "@angular/forms";



export function customValidatorEmail(control:AbstractControl){
    if(control.value === 'yuvraj'){
        return {notAllowed:true}
    }
    return null;
}

export function cardValidtator(control:AbstractControl):Promise<any|null>{
    return new Promise((resolve)=>{
        if(control.value === '1234'){
            resolve({visa:true})
        }else if(control.value == '6789'){
            resolve({mastercard:true})
        }else{
            resolve(null);
        }
        
    })
}