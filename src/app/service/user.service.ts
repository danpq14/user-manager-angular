import { Injectable } from '@angular/core';
import {IUser} from '../interface/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: IUser[] = [
    {
      id: 1,
      name: 'Dân',
      email: 'danpq14@mail.com',
      age: 27
    },
    {
      id: 2,
      name: 'Minh Khang',
      email: 'khangpm@mail.com',
      age: 4
    },
    {
      id: 3,
      name: 'Minh Khôi',
      email: 'khoipm@mail.com',
      age: 1
    },
    {
      id: 4,
      name: 'Minh Khuê',
      email: 'khuepm@mail.com',
      age: 27
    }
  ];
  constructor() { }

  getAllUsers() {
    return this.users;
  }
}
