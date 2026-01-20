import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {

  userFormFG!:FormGroup;
  userFormFB!:FormGroup;

  constructor(private fb:FormBuilder){
    
    this.userFormFB = this.fb.group({
      name:['', [Validators.required, Validators.pattern('^[a-zA-Z]+(?:\\s[a-zA-Z]+)+$')]],
      email:['', [Validators.required, Validators.email]]
    })


    this.userFormFG = new FormGroup({
      name:new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+(?:\\s[a-zA-Z]+)+$')]),
      email:new FormControl('', [Validators.required, Validators.email])
    })
  }


  submitForm(){
    console.log(this.userFormFG.value)
    console.log(this.userFormFB.value);
    
  }
}
