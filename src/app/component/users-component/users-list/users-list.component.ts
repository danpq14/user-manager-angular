import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.service';
import {IUser} from '../../../interface/iuser';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: IUser[] = [];
  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
      this.getAllUsers();
  }
  getAllUsers() {
    this.users = this.userService.getAllUsers();
    console.log(this.users);
  }
}
