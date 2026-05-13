import { FormControl, FormGroup } from '@angular/forms';

export type UserSearchFormModel = {
  query: string;
  city: string;
  profession: string;
  status: string;
  ageFrom: number | null;
  ageTo: number | null;
  experienceFrom: number | null;
  experienceTo: number | null;
};

export function createUserSearchForm() {
  return new FormGroup<{
    [K in keyof UserSearchFormModel]: FormControl<UserSearchFormModel[K]>;
  }>({
    query: new FormControl('', { nonNullable: true }),
    city: new FormControl('', { nonNullable: true }),
    profession: new FormControl('', { nonNullable: true }),
    status: new FormControl('', { nonNullable: true }),

    ageFrom: new FormControl(null),
    ageTo: new FormControl(null),

    experienceFrom: new FormControl(null),
    experienceTo: new FormControl(null),
  });
}
