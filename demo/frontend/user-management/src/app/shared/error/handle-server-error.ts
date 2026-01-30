import {AbstractControl} from '@angular/forms';

export interface ServerError {
    field: string | null;
    code: string;
    message: string;
  }
  export function handleFormServerError(formControls: { [key: string]: AbstractControl }, errorResponse: any) {

    const errors: ServerError[] = Array.isArray(errorResponse) ? errorResponse : [errorResponse];

    errors.forEach(err => {
      if (err.field && formControls[err.field]) {
        formControls[err.field].setErrors({ [err.code]: true });
        formControls[err.field].markAsTouched();
      } else {
        console.error('Unhandled server error', err);
      }
    });
  }
