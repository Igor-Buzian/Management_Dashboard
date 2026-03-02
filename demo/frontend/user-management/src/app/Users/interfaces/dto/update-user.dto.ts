import {UserStatus} from './user-status';

export interface UpdateUserDto {
  name?: string;
  email?: string;

  city?: string;
  profession?: string;
  age?: number;
  experienceYears?: number;
  avatarUrl?: string;
  status?: UserStatus;
}
