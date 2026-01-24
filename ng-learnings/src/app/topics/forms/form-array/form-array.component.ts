import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent {
  userForm!:FormGroup

  get addresses(){
    return (this.userForm.get('addresses') as FormArray).controls
  }
  constructor(private fb : FormBuilder){
    this.userForm =  this.fb.group({
      name:['', [Validators.required]],
      email:['', [Validators.email, Validators.required]],
      addresses : new FormArray([new FormControl('', [Validators.required])])

      // addresses: this.fb.array([
      //   this.fb.control('', Validators.required)   // 👈 default address
      // ])
    }) 
  }

  addMoreAddress(){
    const control = new FormControl('', Validators.required);
    (this.userForm.get('addresses') as FormArray).push(control)
  }

  deleteAddress(i:number){
    (this.userForm.get('addresses') as FormArray).removeAt(i);
  }
  
}
