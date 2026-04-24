import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CreateUserDto } from '../../interfaces/dto/create-user.dto';
import { createUserForm } from '../../../shared/form/user.form';
import { BaseFormComponent } from '../base-form/base-form.component';
import { readImageFile } from '../../../shared/form/user.file.selected';
import { VALIDATION_MESSAGES } from '../../../shared/validation/users.validation';
import { UserFormModel } from './user-form-model';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-form.html',
  styleUrls: ['./user-form.scss'],
})
export class UserForm extends BaseFormComponent<UserFormModel> {

  @Output() submitUser = new EventEmitter<CreateUserDto>();

  form = createUserForm();
  previewUrl: string | null = null;

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitUser.emit(this.form.getRawValue());
    this.form.reset();
    this.previewUrl = null;
  }

  async onFileSelected(event: Event) {
    const result = await readImageFile(event);
    if (!result) return;

    this.previewUrl = result;
    this.form.get('avatarUrl')?.setValue(result);
  }
}
