import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-validator',
  templateUrl: './custom-validator.component.html',
  styleUrls: ['./custom-validator.component.scss']
})
export class CustomValidatorComponent {
  cvForm!:FormGroup

  constructor(private fb : FormBuilder){
    this.cvForm = this.fb.group({
      panNumber:['', Validators.required,]
    })
  }
}