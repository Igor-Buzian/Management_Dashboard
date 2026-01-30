import {Component, ViewChild} from '@angular/core';
import {BehaviorSubject, switchMap} from 'rxjs';
import {UserService} from '../../services/user-service/user.service';
import {CreateUserDto} from '../../interfaces/dto/create-user.dto';
import {UserForm} from '../user-form/user-form';
import {UsersList} from '../users-list/users-list';
import {CommonModule} from '@angular/common';
import {User} from '../../interfaces/models/User';
import {UserFormModalComponent} from '../user-form-modal.component/user-form-modal.component';


@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [
    UserForm,
    UsersList,
    UserFormModalComponent,
    CommonModule
  ],
  templateUrl: './users-page.html',
  styleUrl: './users-page.scss',
})
export class UsersPage {
  private refresh$ = new BehaviorSubject<void>(undefined);
  users$ = this.refresh$.pipe(switchMap(() => this.userService.getUsers()));
  @ViewChild('formModal') formModal?: UserFormModalComponent;
  @ViewChild('form') form?: UserForm;
  selectedUser: User | null = null;

  constructor(private userService: UserService) {
  }

  addUser(dto: CreateUserDto) {
    this.userService.addUser(dto).subscribe({
      next: () =>{
          this.refresh$.next();
      },
      error: (err) =>{
        this.form?.handleServerError(err.error);
      }
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.refresh$.next();
    });
  }

  openEditModal(user: User) {
    this.selectedUser = user;
  }

  updateUser(user: User) {
    this.userService.updateUser(user.id, user).subscribe({
        next: () => {
          this.selectedUser = null;
          this.refresh$.next();
        },
        error: (error) => {
            this.formModal?.handleServerError(error.error);
        }
      }
    )
  }
}
