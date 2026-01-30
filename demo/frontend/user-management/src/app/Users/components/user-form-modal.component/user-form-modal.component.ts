import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../interfaces/models/User';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {VALIDATION_MESSAGES} from '../../../shared/validation/users.validation';
import {getValidationMessages} from '../../../shared/validation/validation.helper';
import {CommonModule} from '@angular/common';
import {handleFormServerError} from '../../../shared/error/handle-server-error';

@Component({
  selector: 'app-user-form-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-form-modal.component.html',
  styleUrl: './user-form-modal.component.scss',
})
export class UserFormModalComponent implements OnInit {
  @Input({required: true}) user!: User;
  @Output() save = new EventEmitter<User>();
  @Output() cancel = new EventEmitter<void>();

  form = new FormGroup(
    {
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern(/^[a-zA-Zа-яА-Я0-9\s-]+$/)]
      }),
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(50)]
      }),
    }
  );

  ngOnInit() {
    if (!this.user) {
      throw new Error('UserFormModal requires user input');
    }

    this.form.setValue({
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

  getFieldErrors(field: keyof typeof VALIDATION_MESSAGES): string[] {
    return getValidationMessages(this.form.get(field), field);
  }

  handleServerError(errStatus: number) {
    handleFormServerError(this.form.controls, errStatus);
  }
}
