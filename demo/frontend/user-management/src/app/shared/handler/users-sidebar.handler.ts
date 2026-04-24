import {Injectable} from '@angular/core';
import {UsersNavigation} from '../navigation/users-navigation';
import {SidebarAction} from '../../Users/components/sidebar/sidebar.model';

@Injectable({ providedIn: 'root' })
export class UsersSidebarHandler {
  constructor(private navigation: UsersNavigation) {}

  handle(action: SidebarAction) {
    switch (action) {
      case 'create-user':
        this.navigation.openCreateUser();
        break;
      case 'users-list':
        this.navigation.openUsersList();
        break;
    }
  }
}
