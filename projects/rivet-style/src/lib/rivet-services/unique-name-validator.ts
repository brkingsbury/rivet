import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of, timer } from 'rxjs';
import { delay, switchMap, map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor() {}

  public checkLogin(login: string) {
    // simulate http.get()
    return of({ isLoginAvailable: login !== 'name' }).pipe(delay(400));
  }
}

export const LoginAsyncValidator = (authService: AuthService, time: number = 500) => {
  return (input: FormControl) =>
    timer(time).pipe(
      switchMap(() => authService.checkLogin(input.value)),
      map(res => (res.isLoginAvailable ? null : { loginExist: true }))
    );
};
