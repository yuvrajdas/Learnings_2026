import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { cardValidtator, customValidatorEmail } from '../custom.validator';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent {
  
  tdUserForm = {name:'', emailaddress:''}
  rfUserForm!:FormGroup
  cond:boolean = true

  get addresses(){
    return (this.rfUserForm.get('addresses') as FormArray).controls
  }

  constructor(private fb:FormBuilder){
    this.rfUserForm = this.fb.group({
      uname:['',[Validators.required, customValidatorEmail]],
      card:['', [Validators.required], cardValidtator],
      // addresses : new FormArray([new FormControl('', [Validators.required])])
      addresses:this.fb.array([
        this.fb.control('', Validators.required)
      ])

    })
  }
  // constructor()
  submitForm(userForm:any){
    console.log(userForm);
    
  }
  submitform(){
    console.log(this.rfUserForm.value);
    
  }

  deleteAddress(i:number){
    (this.rfUserForm.get('addresses') as FormArray).removeAt(i)
  }

  addMoreAddress(){
    let control = new FormControl('', [Validators.required]);
    (this.rfUserForm.get('addresses') as FormArray).push(control)
  }
}
