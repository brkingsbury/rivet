import { FormControl } from '@angular/forms';
import { percentageValidator } from './rivet-percentage-validator';

describe('percentageValidator', () => {
  it('should return an invalid format error if the parser returned null', () => {
    const validator = percentageValidator(2);
    expect(validator(new FormControl(null))).toEqual({
      invalidFormat: 'invalidFormat'
    });
  });

  it('should return a max value error if the input is larger than the max allowed', () => {
    const validator = percentageValidator(10000);
    const result = validator(new FormControl(20000));
    expect(result.tooLarge).toBeTruthy();
  });

  it('should return null if there are no issues', () => {
    const validator = percentageValidator(10000);
    const result = validator(new FormControl(200));
    expect(result).toBeNull();
  });
});
