import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UsersListComponent} from '../../component/users-component/users-list/users-list.component';
import {UsersAddComponent} from '../../component/users-component/users-add/users-add.component';
import {UsersEditComponent} from '../../component/users-component/users-edit/users-edit.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

const route: Routes = [
  {path: "list", component: UsersListComponent},
  {path: "add", component: UsersAddComponent},
  {path: "edit", component: UsersEditComponent}
];

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(route)
  ]
})
export class UsersModule { }
