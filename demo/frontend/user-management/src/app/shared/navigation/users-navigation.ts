import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class UsersNavigation {

  constructor(private router: Router) {}

  openUsersList() {
    this.router.navigate(['/users']);
  }

  openCreateUser() {
    this.router.navigate(['/users/create']);
  }

  openEditUser(id: number) {
    this.router.navigate(['/users', id, 'edit']);
  }
}
