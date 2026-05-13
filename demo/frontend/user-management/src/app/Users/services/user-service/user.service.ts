import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {User} from '../../interfaces/models/User';
import {CreateUserDto} from '../../interfaces/dto/create-user.dto';
import {UpdateUserDto} from '../../interfaces/dto/update-user.dto';
import {API} from '../../../shared/routes/api.urls';
import {UserSearchDto} from '../../interfaces/dto/user-search.dto';

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(filters: UserSearchDto) {
    const safeFilters = filters ?? {};

    const fromObject: Record<string, string> = {};

    (Object.entries(safeFilters) as [string, unknown][])
      .forEach(([k, v]) => {
        if (v !== null && v !== undefined && String(v).trim() !== '') {
          fromObject[k] = String(v);
        }
      });

    const params = new HttpParams({fromObject});

    return this.http.get<User[]>(
      API.USERS.GET_ALL(),
      {params}
    );
  }

  create(dto: CreateUserDto) {
    return this.http.post<User>(
      API.USERS.CREATE(),
      dto
    );
  }

  update(id: number, dto: UpdateUserDto) {
    return this.http.put<User>(
      API.USERS.UPDATE(id),
      dto
    );
  }

  delete(id: number) {
    return this.http.delete<void>(
      API.USERS.DELETE(id)
    );
  }
}
