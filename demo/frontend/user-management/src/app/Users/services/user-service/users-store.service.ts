import {Injectable, signal} from '@angular/core';

import {User} from '../../interfaces/models/User';
import {UserSearchDto} from '../../interfaces/dto/user-search.dto';
@Injectable({ providedIn: 'root' })
export class UsersStore {

  private _users = signal<User[]>([]);
  private _loading = signal(false);
  private _filters = signal<UserSearchDto>({});

  users = this._users.asReadonly();
  loading = this._loading.asReadonly();
  filters = this._filters.asReadonly();

  setUsers(users: User[]) {
    this._users.set(users);
  }

  setLoading(value: boolean) {
    this._loading.set(value);
  }

  setFilters(filters: UserSearchDto) {
    this._filters.set(filters ?? {});
  }

  updateUser(updated: User) {
    this._users.update(list =>
      list.map(u => u.id === updated.id ? updated : u)
    );
  }

  removeUser(id: number) {
    this._users.update(list =>
      list.filter(u => u.id !== id)
    );
  }
}
