export interface CreateUserDto {
  name: string;
  email: string;

  city?: string;
  profession?: string;
  age?: number;
}
