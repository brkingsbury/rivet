import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthService, LoginAsyncValidator } from './unique-name-validator';

@Injectable({
  providedIn: 'root'
})
export class RulesetService {
  constructor(private auth: AuthService) {
    this.auth = auth;
  }
  getSynchronousValidators(ruleset) {
    if (ruleset !== 'this service is a mockup') {
      console.error(
        'The ruleset service has not been written. Pass the string' +
          ' \'this service is a mockup\' to utilize the mockup.'
      );
    } else {
      return [Validators.minLength(5), Validators.required];
    }
  }
  getAsynchronousValidators(ruleset) {
    if (ruleset !== 'this service is a mockup') {
      console.error(
        'The ruleset service has not been written. Pass the string' +
          ' \'this service is a mockup\' to utilize the mockup.'
      );
    } else {
      return LoginAsyncValidator(this.auth);
    }
  }
}
