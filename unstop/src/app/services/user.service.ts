import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../interfaces/user.interface';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  private readonly userDataSubject = new BehaviorSubject<IUser[]>(this.constructUsers());
  readonly userData$ = this.userDataSubject.asObservable();
  
  constructor() { }

  addUser(newUser: IUser): void {
    const current = this.userDataSubject.getValue();
    this.userDataSubject.next([newUser, ...current]);
  }

  constructUsers(count: number = 10): IUser[] {
   const roles: IUser['role'][] = ['Admin', 'Editor', 'Viewer'];
   const names: string[] = ["Rahul", "Sneha", "Amit", "Kavya", "Arjun", "Meera", "Nikhil", "Isha", "Aditya", "Shalini"];
   const users: IUser[] = [];

    for (let i = 0; i < count; i++) {

      const name = names[Math.floor(Math.random() * names.length)];
      const email = `${name.toLowerCase()}${i}@gmail.com`;
      const role = roles[Math.floor(Math.random() * roles.length)];

      users.push({ name, email, role });
    }

    return users;
  }
}
