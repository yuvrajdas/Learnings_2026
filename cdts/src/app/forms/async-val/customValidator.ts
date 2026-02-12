import { AbstractControl } from "@angular/forms";

export  function customValidator(control:AbstractControl){
      console.log("con",control.value)
    if(control.value === "1111"){
        return {cfe:true}
    }else{
        return null;
    }
}

export function myAsyncValidator(control:AbstractControl):Promise<any>{
    return new Promise((resolve)=>{
        if(control.value === "6789"){
            resolve({visa:true})
        }else if(control.value === "1234"){
            resolve({master:true})
        }else{
            resolve(null)
        }
    })
}