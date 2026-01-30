import {FormControl, FormGroup, Validators} from '@angular/forms';

export function createUserForm(): FormGroup {
  return new FormGroup(
    {
      name: new FormControl('',
        {
          nonNullable: true,
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(50),
            Validators.pattern(/^[a-zA-Zа-яА-Я0-9\s-]+$/)
          ],
          updateOn: 'blur'
        }
      ),
      email: new FormControl('',
        {
          nonNullable: true,
          validators:
            [
              Validators.required,
              Validators.email,
              Validators.minLength(3),
              Validators.maxLength(50)
            ],
          updateOn: 'blur'
        })
    }
  );
}

