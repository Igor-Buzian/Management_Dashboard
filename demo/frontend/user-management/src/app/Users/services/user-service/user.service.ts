import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../interfaces/models/User';
import { CreateUserDto } from '../../interfaces/dto/create-user.dto';
import { UpdateUserDto } from '../../interfaces/dto/update-user.dto';
import {API} from '../../../shared/routes/api.urls';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers(filters: Record<string, any>) {
    return this.http.get<User[]>(
      API.USERS.GET_ALL(),
      { params: filters }
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
