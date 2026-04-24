import { AbstractControl } from '@angular/forms';
import { VALIDATION_MESSAGES } from './users.validation';

export function getValidationMessages(
  control: AbstractControl | null,
  field: keyof typeof VALIDATION_MESSAGES
): string[] {
  if (!control || !control.touched || !control.errors) {
    return [];
  }

  const fieldMessages = VALIDATION_MESSAGES[field];

  return Object.keys(control.errors).map(errorKey => {
    return (
      fieldMessages[errorKey as keyof typeof fieldMessages] ??
      'Invalid value'
    );
  });
}
