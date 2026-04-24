import { FormControl, FormGroup, AbstractControl } from '@angular/forms';
import { getValidationMessages } from '../../../shared/validation/validation.helper';
import { VALIDATION_MESSAGES } from '../../../shared/validation/users.validation';

export abstract class BaseFormComponent<
  TForm extends Record<keyof typeof VALIDATION_MESSAGES, unknown>
> {
  abstract form: FormGroup<{
    [K in keyof TForm]: FormControl<TForm[K]>;
  }>;

  getFieldErrors<K extends keyof typeof VALIDATION_MESSAGES>(
    field: K
  ): string[] {
    const control: AbstractControl | null =
      this.form.get(field as string);

    return getValidationMessages(control, field);
  }
}
