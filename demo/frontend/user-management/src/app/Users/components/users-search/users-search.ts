import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { UserSearchDto } from "../../interfaces/dto/user-search.dto";
import {createUserSearchForm} from '../../../shared/form/user-search.form';
import {debounceTime} from 'rxjs';

@Component({
  selector: 'app-users-search',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './users-search.html',
  styleUrl: './users-search.scss',
})
export class UsersSearch {

  @Output() search = new EventEmitter<UserSearchDto>();

  form = createUserSearchForm();

  submit() {
    const raw = this.form.getRawValue();

    const dto = Object.fromEntries(
      Object.entries(raw)
        .filter(([_, v]) => v !== null && v !== undefined && String(v).trim() !== '')
        .map(([k, v]) => [k, typeof v === 'string' ? v.trim() : v])
    ) as UserSearchDto;

    this.search.emit(dto);
  }

  reset() {
    this.form.reset({
      query: '',
      city: '',
      profession: '',
      status: '',
      ageFrom: null,
      ageTo: null,
      experienceFrom: null,
      experienceTo: null
    });

    this.search.emit({});
  }
}
