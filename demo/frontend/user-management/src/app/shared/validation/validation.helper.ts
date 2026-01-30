import { AbstractControl } from '@angular/forms';
import {VALIDATION_MESSAGES} from './users.validation';

export function getValidationMessages(
  control: AbstractControl | null,
  field: keyof typeof VALIDATION_MESSAGES
): string[] {
  if (!control || !control.touched || !control.errors) return [];

  const messages = VALIDATION_MESSAGES[field];


  return Object.keys(control.errors).map((key) => messages[key as keyof typeof messages] ?? 'Invalid value');
}
