import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../../interfaces/models/User';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './users-list.html',
  styleUrl: './users-list.scss',
})
export class UsersList {
  @Input() users: User[] | null = [];
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<User>();

  onDelete(id: number) {
    this.delete.emit(id);
  }

  onEdit(user: User) {
    console.log('EDIT CLICK', user);
    this.edit.emit(user);
  }
}
