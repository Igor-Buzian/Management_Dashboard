import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, using} from 'rxjs';
import {User} from '../../interfaces/models/User';
import {CreateUserDto} from '../../interfaces/dto/create-user.dto';
import {UpdateUserDto} from '../../interfaces/dto/update-user.dto';
import {API} from '../../../shared/api/api-routes';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(API.USERS.GET_ALL());
  }

  addUser(dto: CreateUserDto): Observable<User> {
    return this.http.post<User>(API.USERS.CREATE(), dto);
  }

  updateUser(id: number, dto: UpdateUserDto): Observable<User> {
    return this.http.put<User>(API.USERS.UPDATE(id), dto);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(API.USERS.DELETE(id));
  }
}
