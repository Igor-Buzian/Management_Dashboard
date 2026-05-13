import {Injectable} from '@angular/core';
import {UsersStore} from '../user-service/users-store.service';
import {UserService} from '../user-service/user.service';
import {User} from '../../interfaces/models/User';
import {finalize, tap} from 'rxjs';
import {UserSearchDto} from '../../interfaces/dto/user-search.dto';

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

    const filters = this.store.filters() ?? {};

    this.api.getUsers(filters).pipe(
      finalize(() => this.store.setLoading(false))
    ).subscribe(users => this.store.setUsers(users));
  }

  search(filters: UserSearchDto) {
    this.store.setFilters(filters ?? {});
    this.loadUsers();
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
