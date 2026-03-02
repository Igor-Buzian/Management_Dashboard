import {UserStatus} from '../dto/user-status';

export interface User {
  id: number;

  name: string;
  email: string;

  city: string;
  profession: string;
  age: number;
  experienceYears: number;

  avatarUrl: string;
  status: UserStatus;
  createdAt: string;
}
