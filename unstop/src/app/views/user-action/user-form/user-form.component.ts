import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Optional } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';
const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/; // Allows alphabets and spaces

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  userForm!:FormGroup;
  userRoles:string[] = ['Admin', 'Editor', 'Viewer'];
  constructor(
    private fb: FormBuilder,
    @Optional() private dialogRef?: MatDialogRef<UserFormComponent, IUser>
  ) {

    this.userForm = this.fb.group({
      name:['', [Validators.required, Validators.pattern(nameRegex)]],
      email:['', [Validators.required, Validators.email]],
      role:['', [Validators.required]]
    })
  }

  ngOnInit(): void {

    
  }

  closeFormModal(): void {
    this.dialogRef?.close();
  }

  addNewUser(): void {
    const newUser: IUser = this.userForm.value
    this.dialogRef?.close(newUser);
  }

}
