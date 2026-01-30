import {Component, EventEmitter, Output} from '@angular/core';
import {CreateUserDto} from '../../interfaces/dto/create-user.dto';
import {ReactiveFormsModule} from '@angular/forms';
import {VALIDATION_MESSAGES} from '../../../shared/validation/users.validation';
import {getValidationMessages} from '../../../shared/validation/validation.helper';
import {createUserForm} from '../../../shared/form/user.form';
import {handleFormServerError} from '../../../shared/error/handle-server-error';
import {BaseFormComponent} from '../base-form/base-form.component';

@Component({
  selector: 'app-user-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
})
export class UserForm extends BaseFormComponent{
  @Output() submitUser = new EventEmitter<CreateUserDto>();
  form = createUserForm();

  submit() {
    if (this.form.invalid) return;

    this.submitUser.emit(this.form.getRawValue());
    this.form.reset();
  }
}
