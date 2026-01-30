import {FormGroup} from '@angular/forms';
import { VALIDATION_MESSAGES } from "../../../shared/validation/users.validation";
import {getValidationMessages} from '../../../shared/validation/validation.helper';
import {handleFormServerError, ServerError} from '../../../shared/error/handle-server-error';


export abstract class BaseFormComponent {
  abstract form: FormGroup;

  getFieldErrors(field: keyof typeof VALIDATION_MESSAGES): string[] {
    return getValidationMessages(this.form.get(field), field);
  }

  handleServerError(err: ServerError | ServerError[]) {
    handleFormServerError(this.form.controls, err);
  }
}
