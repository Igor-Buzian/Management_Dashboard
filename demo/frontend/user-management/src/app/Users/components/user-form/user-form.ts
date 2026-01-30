import {Component, EventEmitter, Output} from '@angular/core';
import {CreateUserDto} from '../../interfaces/dto/create-user.dto';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {VALIDATION_MESSAGES} from '../../../shared/validation/users.validation';
import {getValidationMessages} from '../../../shared/validation/validation.helper';

@Component({
  selector: 'app-user-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
})
export class UserForm {
  @Output() submitUser = new EventEmitter<CreateUserDto>();

  form = new FormGroup(
    {
      name: new FormControl('',
        {
          nonNullable: true,
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(50),
            Validators.pattern(/^[a-zA-Zа-яА-Я0-9\s-]+$/)
          ]
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
            ]
        })
    }
  )

  submit() {
    if (this.form.invalid) return;

    this.submitUser.emit(this.form.getRawValue());
    this.form.reset();
  }

  getFieldErrors(field: keyof typeof VALIDATION_MESSAGES): string[] {
    return getValidationMessages(this.form.get(field), field);
  }
}
