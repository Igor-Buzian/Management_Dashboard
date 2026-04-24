import {Injectable} from '@angular/core';
import {UsersStore} from '../user-service/users-store.service';
import {UserService} from '../user-service/user.service';
import {User} from '../../interfaces/models/User';
import {tap} from 'rxjs';

@Injectable({providedIn: 'root'})
export class UsersFacade {

  constructor(
    private api: UserService,
    private store: UsersStore
  ) {
  }

  get users$() {
    return this.store.users;
  }

  get loading$() {
    return this.store.loading;
  }


  loadUsers() {
    this.store.setLoading(true);

    this.api.getUsers(this.store.filters())
      .subscribe({
        next: (users) => {
          this.store.setUsers(users);
          this.store.setLoading(false);
        },
        error: () => this.store.setLoading(false)
      });
  }

  update(user: User) {
    return this.api.update(user.id, user).pipe(
      tap(updated => this.store.updateUser(updated))
    );
  }

  delete(id: number) {
    return this.api.delete(id).pipe(
      tap(() => this.store.removeUser(id))
    );
  }
}
