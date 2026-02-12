import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { customValidator, myAsyncValidator } from './customValidator';

@Component({
  selector: 'app-async-val',
  templateUrl: './async-val.component.html',
  styleUrls: ['./async-val.component.scss']
})
export class AsyncValComponent {
  myForm!:FormGroup;

  constructor(private fb:FormBuilder){
    this.myForm = this.fb.group({
      fn:['', [Validators.required, customValidator], myAsyncValidator ]
    
    })
  }
}
