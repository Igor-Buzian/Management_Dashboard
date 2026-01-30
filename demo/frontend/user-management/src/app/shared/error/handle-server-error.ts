import {AbstractControl} from '@angular/forms';

export function handleFormServerError(formControls: { [key: string]: AbstractControl }, err: number) {
  switch (err) {
    case 409:
      formControls['email']?.setErrors({ uniqueEmail: true });
      formControls['email']?.markAsTouched();
      break;
    default:
      console.error('Unhandled server error', err);
      break;
  }
}
