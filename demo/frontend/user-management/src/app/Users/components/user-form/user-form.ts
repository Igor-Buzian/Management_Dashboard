import {Component, EventEmitter, Output} from '@angular/core';
import {CreateUserDto} from '../../interfaces/dto/create-user.dto';
import {ReactiveFormsModule} from '@angular/forms';
import {VALIDATION_MESSAGES} from '../../../shared/validation/users.validation';
import {getValidationMessages} from '../../../shared/validation/validation.helper';
import {createUserForm} from '../../../shared/form/user.form';

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
  form = createUserForm();

  submit() {
    if (this.form.invalid) return;

    this.submitUser.emit(this.form.getRawValue());
    this.form.reset();
  }

  getFieldErrors(field: keyof typeof VALIDATION_MESSAGES): string[] {
    return getValidationMessages(this.form.get(field), field);
  }
}
