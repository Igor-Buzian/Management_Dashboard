import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../interfaces/models/User';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {createUserForm} from '../../../shared/form/user.form';
import {BaseFormComponent} from '../base-form/base-form.component';

@Component({
  selector: 'app-user-form-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-form-modal.component.html',
  styleUrl: './user-form-modal.component.scss',
})
export class UserFormModalComponent extends BaseFormComponent implements OnInit {
  @Input({required: true}) user!: User;
  @Output() save = new EventEmitter<User>();
  @Output() cancel = new EventEmitter<void>();

  form = createUserForm();

  ngOnInit() {
    if (!this.user) {
      throw new Error('UserFormModal requires user input');
    }

    this.form.patchValue({
      name: this.user.name,
      email: this.user.email
    });
  }

  submit() {
    if (this.form.invalid) return;

    const updatedUser: User = {
      id: this.user.id,
      ...this.form.getRawValue()
    };
    this.save.emit(updatedUser)
  }
}
