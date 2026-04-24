import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersList} from '../users-list/users-list';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {UsersFacade} from '../../services/facade/users.facade';
import {SidebarAction} from '../sidebar/sidebar.model';
import {User} from '../../interfaces/models/User';
import {UsersSidebarHandler} from '../../../shared/handler/users-sidebar.handler';
import {UserFormModalComponent} from '../user-form-modal.component/user-form-modal.component';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [
    CommonModule,
    UsersList,
    SidebarComponent,
    UserFormModalComponent,
  ],
  templateUrl: './users-page.html',
  styleUrls: ['./users-page.scss'],
})
export class UsersPage implements OnInit {

  selectedUser: User | null = null;

  constructor(
    public facade: UsersFacade,
    private sidebarHandler: UsersSidebarHandler
  ) {
  }


  ngOnInit() {
    this.facade.loadUsers();
  }

  get users() {
    return this.facade.users$;
  }

  onSidebarAction(action: SidebarAction) {
    this.sidebarHandler.handle(action);
  }


  openEdit(user: User) {
    this.selectedUser = user;
  }

  closeModal() {
    this.selectedUser = null;
  }

  save(user: User) {
    this.facade.update(user).subscribe(() => this.closeModal());
  }

  delete(id: number) {
    this.facade.delete(id).subscribe();
  }
}
