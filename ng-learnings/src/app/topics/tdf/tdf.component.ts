import { Component } from '@angular/core';

interface IUser{
  username:string;
  email:string;
  age:number;
}

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent {

  user:IUser = {username:'', email:'', age:0}

  submitForm(user:IUser){
    console.log(user);
  }
}
