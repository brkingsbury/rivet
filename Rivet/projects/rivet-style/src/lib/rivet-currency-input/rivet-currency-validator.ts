import { AbstractControl, ValidatorFn } from '@angular/forms';

export function currencyValidator(maxValue: number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
      if (control.value === null) {
        return {'invalidFormat': 'invalidFormat'};
      }

      return control.value > maxValue ? {'tooLarge': {value: control.value, maxValue: maxValue}} : null;
  };
}
