import {ChangeDetectorRef, Component, EventEmitter, Output} from '@angular/core';
import {CreateUserDto} from '../../interfaces/dto/create-user.dto';
import {ReactiveFormsModule} from '@angular/forms';
import {createUserForm} from '../../../shared/form/user.form';
import {BaseFormComponent} from '../base-form/base-form.component';
import {CommonModule} from '@angular/common';
import {readImageFile} from '../../../shared/form/user.file.selected';

@Component({
  selector: 'app-user-form',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
  standalone: true
})
export class UserForm extends BaseFormComponent {
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
