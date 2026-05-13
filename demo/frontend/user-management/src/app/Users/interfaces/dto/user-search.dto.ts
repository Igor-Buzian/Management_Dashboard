export interface UserSearchDto {
  query?: string;
  city?: string;
  profession?: string;
  status?: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';

  ageFrom?: number;
  ageTo?: number;

  experienceFrom?: number;
  experienceTo?: number;
}
