import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../interfaces/models/User';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {createUserForm} from '../../../shared/form/user.form';
import {BaseFormComponent} from '../base-form/base-form.component';
import {required} from '@angular/forms/signals';
import {UserStatus} from '../../interfaces/dto/user-status';
import {readImageFile} from '../../../shared/form/user.file.selected';

@Component({
  selector: 'app-user-form-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-form-modal.component.html',
  styleUrls: ['./user-form-modal.component.scss'],
})
export class UserFormModalComponent extends BaseFormComponent implements OnInit {
  private _user!: User;
  previewUrl: string | null = null;
  form = createUserForm();
  @Input({required:true})
  set user(value:User){
    this._user = value;
    if (!this.form) return;
    this.form.reset();
    this.form.patchValue(
      {
        name: value.name,
        email: value.email,
        city: value.city ?? '',
        profession: value.profession ?? '',
        age: value.age ?? null,
        experienceYears: value.experienceYears ?? null,
        avatarUrl: value.avatarUrl ?? '',
        status: value.status ?? UserStatus.ACTIVE
      });
  }
  get user(): User {
    return this._user;
  }


  @Output() save = new EventEmitter<User>();
  @Output() cancel = new EventEmitter<void>();


  ngOnInit() {
    if (!this.user) {
      throw new Error('UserFormModal requires user input');
    }
  }


  submit() {
    if (this.form.invalid) return;

    const updatedUser: User = {
      id: this.user.id,
      ...this.form.getRawValue()
    };
    this.save.emit(updatedUser)
  }

  async onFileSelected(event: Event) {
    const result = await readImageFile(event);
    if (!result) return;
    this.previewUrl = result;
    this.form.get('avatarUrl')?.setValue(result);
  }
}
