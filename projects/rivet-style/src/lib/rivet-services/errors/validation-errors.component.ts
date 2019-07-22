import { ErrorTypes } from './error-types';
import { CustomErrorMessage } from './models/custom-error-message';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
import * as Articles from 'articles';
import { Observable, of, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ValidationModel } from './validation-model';

@Component({
  selector: 'admin-validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.scss']
})
export class ValidationErrorsComponent implements OnInit {
  @Input()
  formControlInput: FormControl = new FormControl();

  @Input()
  validationModel: ValidationModel = new ValidationModel();

  @Input()
  customErrorMessages: CustomErrorMessage[] = [];

  specialCharacterMessage: string;

  constructor() {}

  ngOnInit() {
    this.formControlInput.asyncValidator = this.validate.bind(this);
  }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    // debounce the validation so we aren't making requests every keystroke

    const controlValue: string = control.value;

    if (this.validationModel.isRequired && !controlValue) {
      return of({ required: true });
    }

    if (this.validationModel.cannotHaveSpaces && controlValue.includes(' ')) {
      return of({ cannotHaveSpaces: true });
    }

    if (this.validationModel.validateSpecialCharacters) {
      let allowedCharacters: string = this.validationModel.supportedSpecialCharacters.join('');
      allowedCharacters = this.escapeSpecialCharacters(allowedCharacters);
      const regex = new RegExp(`^[a-zA-Z0-9${allowedCharacters}]*$`);
      const match = regex.test(controlValue);
      if (!match) {
        this.specialCharacterMessage = this.getReadableMessageForSpecialCharacters(
          this.validationModel.supportedSpecialCharacters
        );
        return of({ specialCharacters: true });
      }
    }

    if (this.validationModel.cannotBeOnlySpaces) {
      if (String(controlValue).trim() === '') {
        return of({ onlySpaces: true });
      }
    }

    if (this.validationModel.requireAutoCompleteMatch) {
      if (controlValue && typeof controlValue === 'string') {
        return of({ requireAutoCompleteMatch: true });
      }
    }

    if (this.validationModel.validateUniqueName) {
      // debounce the unique name validation so there aren't requests made every keystroke
      return timer(300).pipe(
        switchMap(() => {
          return this.validationModel.uniqueNameService
            .getByName(control.value)
            .pipe(map(this.isNameUnique(controlValue).bind(this)));
        })
      );
    }

    if (this.validationModel.validateNumber) {
      if (isNaN(controlValue as any)) {
        return of({ validateNumber: true });
      }
    }

    return of(null);
  }

  private isNameUnique(controlValue): (value: Object[], index: number) => { nameTaken: boolean } {
    // result corresponds to value above, index is not explicitly mapped below
    return result => {
      const exactMatchResultsWithoutCurrent = result
        ? result.filter(_ => {
            /* ^Will fail if UI is grabbing whole response envelope instead of envelope.data, which should be
             * cast to an array.
             * See comments on validate, above.
             */
            // if Id matches, return false
            if (_['id'] !== undefined && _['id'] === this.validationModel.currentId) {
              return false;
            } else {
              // if id doesn't match and name does, return true
              if (
                (_['name'] !== undefined && String(_['name']).toLowerCase() === controlValue.toLowerCase()) ||
                (_['userName'] !== undefined && String(_['userName']).toLowerCase() === controlValue.toLowerCase())
              ) {
                return true;
              } else {
                return false;
              }
            }
          })
        : [];
      return exactMatchResultsWithoutCurrent && exactMatchResultsWithoutCurrent.length > 0 ? { nameTaken: true } : null;
    };
  }

  private escapeSpecialCharacters(allowedCharacters: string) {
    return allowedCharacters.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  getReadableMessageForSpecialCharacters(specialCharacters: string[]): string {
    return `${specialCharacters.join(' ')}`;
  }

  getRequiredValidationMessage(): string {
    const propertyWithArticle = Articles.articlize(this.validationModel.propertyName);

    return `Please enter ${propertyWithArticle}`;
  }

  getValidationMessage(): string {
    const formControl = this.formControlInput;
    const name = this.validationModel.propertyName;

    let message: string;

    switch (true) {
      case formControl.hasError(ErrorTypes.Email):
        message = this.setMessage('Please enter a valid email address', ErrorTypes.Email);
        break;
      case formControl.hasError(ErrorTypes.CannotHaveSpaces):
        message = this.setMessage(`The ${name} cannot contain spaces`, ErrorTypes.CannotHaveSpaces);
        break;
      case formControl.hasError(ErrorTypes.OnlySpaces):
        message = this.setMessage(`The ${name} cannot be only spaces`, ErrorTypes.OnlySpaces);
        break;
      case formControl.hasError(ErrorTypes.NameTaken):
        message = this.setMessage(
          `That ${name} already exists<br/> Please use a different ${name}`,
          ErrorTypes.NameTaken
        );
        break;
      case formControl.hasError(ErrorTypes.SpecialCharacters):
        const allowedCharacters = this.specialCharacterMessage;
        message = this.setMessage(
          `The ${name} cannot contain special characters besides ${allowedCharacters}`,
          ErrorTypes.SpecialCharacters
        );
        break;
      case formControl.hasError(ErrorTypes.RequireAutoCompleteMatch):
        message = this.setMessage(`Please select an item from the list`, ErrorTypes.RequireAutoCompleteMatch);
        break;
      case formControl.hasError(ErrorTypes.ValidateNumber):
        message = this.setMessage('Please enter a valid number', ErrorTypes.ValidateNumber);
        break;
      case formControl.hasError(ErrorTypes.IsValidMaterialDatepickerDate):
        message = this.setMessage('Please enter a valid date', ErrorTypes.IsValidMaterialDatepickerDate);
        break;
      case formControl.hasError(ErrorTypes.MaterialDatepickerMax):
        const maxDate = formControl.errors.matDatepickerMax.max.format(formControl.value._f);
        message = this.setMessage(`The ${name} must be on or before ${maxDate}`, ErrorTypes.MaterialDatepickerMax);
        break;
      case formControl.hasError(ErrorTypes.MaterialDatepickerMin):
        const minDate = formControl.errors.matDatepickerMin.min.format(formControl.value._f);
        message = this.setMessage(`The ${name} must be on or after ${minDate}`, ErrorTypes.MaterialDatepickerMin);
        break;
      case formControl.hasError(ErrorTypes.Required):
        message = this.setMessage(this.getRequiredValidationMessage(), ErrorTypes.Required);
        break;
      default:
        break;
    }

    return message;
  }

  private setMessage(defaultMessage: string, errorType: ErrorTypes) {
    return this.customErrorMessages[errorType] ? this.customErrorMessages[errorType] : defaultMessage;
  }
}
