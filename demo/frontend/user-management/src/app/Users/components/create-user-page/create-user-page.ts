import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserForm} from '../user-form/user-form';
import {CreateUserDto} from '../../interfaces/dto/create-user.dto';
import {UserService} from '../../services/user-service/user.service';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {SidebarAction} from '../sidebar/sidebar.model';
import {UsersSidebarHandler} from '../../../shared/handler/users-sidebar.handler';


@Component({
  selector: 'app-create-user-page',
  standalone: true,
  imports: [UserForm, CommonModule, SidebarComponent],
  templateUrl: './create-user-page.html',
})
export class CreateUserPage {

  constructor(
    private userService: UserService,
    private sidebarHandler: UsersSidebarHandler
  ) {
  }

  addUser(dto: CreateUserDto) {
    this.userService.create(dto).subscribe();
  }

  onSidebarAction(action: SidebarAction) {
    this.sidebarHandler.handle(action);
  }
}
