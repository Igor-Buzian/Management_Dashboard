import { Routes } from '@angular/router';
import { UsersPage } from './Users/components/users-page/users-page';
import { CreateUserPage } from './Users/components/create-user-page/create-user-page';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersPage },
  { path: 'users/create', component: CreateUserPage },
];
