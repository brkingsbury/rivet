import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import {
  AuthService,
  LoginAsyncValidator
} from '../../../../projects/rivet-style/src/lib/rivet-services/unique-name-validator';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['../components.component.scss']
})
export class InputsComponent implements OnInit {
  private nameValidation = [Validators.minLength(2)];
  private uniqueValidation;
  private JSON = JSON;
  constructor(private auth: AuthService) {
    this.uniqueValidation = LoginAsyncValidator(auth);
  }
  ngOnInit() {}
}
