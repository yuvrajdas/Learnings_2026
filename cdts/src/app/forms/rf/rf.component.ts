import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rf',
  templateUrl: './rf.component.html',
  styleUrls: ['./rf.component.scss']
})
export class RfComponent {

  userForm!:FormGroup

 
   
  public get addresses(){
    return (this.userForm.get('addresses') as FormArray).controls
  }
  constructor(private fb : FormBuilder){

    this.userForm = this.fb.group({
      name:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      // addresses:new FormArray([new FormControl('', [Validators.required])])
      addresses:this.fb.array([
        this.fb.control('', [Validators.required])
      ])
    })

  }

  del(i:number){
    (this.userForm.get('addresses') as FormArray).removeAt(i)
  }
  addnew(){
    let control = this.fb.control('', [Validators.required]);
    this.addresses.push(control);
  }

} 
