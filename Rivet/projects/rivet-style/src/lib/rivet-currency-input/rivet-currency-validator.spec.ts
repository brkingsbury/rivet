import { FormControl } from '@angular/forms';
import { currencyValidator } from './rivet-currency-validator';

describe('currencyValidator', () => {
  it('should return an invalid format error if the parser returned null', () => {
    const validator = currencyValidator(10000);
    expect(validator(new FormControl(null))).toEqual({'invalidFormat': 'invalidFormat'});
  });

  it('should return a max value error if the input is larger than the max allowed', () => {
    const validator = currencyValidator(10000);
    const result = validator(new FormControl(20000));
    expect(result.tooLarge).toBeTruthy();
  });

  it('should return null if there are no issues', () => {
    const validator = currencyValidator(10000);
    const result = validator(new FormControl(200));
    expect(result).toBeNull();
  });
});
