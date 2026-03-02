import { FormControl, FormGroup, Validators } from '@angular/forms';

const NAME_VALIDATORS = [
  Validators.required,
  Validators.minLength(3),
  Validators.maxLength(50),
  Validators.pattern(/^[a-zA-Zа-яА-Я0-9\s-]+$/)
];

const EMAIL_VALIDATORS = [
  Validators.required,
  Validators.email,
  Validators.minLength(3),
  Validators.maxLength(50)
];

const CITY_VALIDATORS = [
  Validators.required,
  Validators.minLength(2),
  Validators.maxLength(50),
  Validators.pattern(/^[a-zA-Zа-яА-Я\s-]+$/)
];

const PROFESSION_VALIDATORS = [
  Validators.required,
  Validators.minLength(2),
  Validators.maxLength(50),
  Validators.pattern(/^[a-zA-Zа-яА-Я\s-]+$/)
];

const AGE_VALIDATORS = [
  Validators.required,
  Validators.min(1),
  Validators.max(120)
];

const EXPERIENCE_VALIDATORS = [
  Validators.required,
  Validators.min(0),
  Validators.max(80)
];

export function createUserForm(): FormGroup {
  return new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: NAME_VALIDATORS}),
    email: new FormControl('', { nonNullable: true, validators: EMAIL_VALIDATORS}),
    city: new FormControl('', { nonNullable: true, validators: CITY_VALIDATORS}),
    profession: new FormControl('', { nonNullable: true, validators: PROFESSION_VALIDATORS}),
    age: new FormControl(null, { validators: AGE_VALIDATORS}),
    experienceYears: new FormControl(null, { validators: EXPERIENCE_VALIDATORS}),
    avatarUrl: new FormControl('', { nonNullable: true, validators: [Validators.required]}),
    status: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  });
}
