import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentModule } from '../material-component-module';
import { RivetCurrencyInputDirective } from './rivet-currency-input.directive';

@Component({
  template: `
  <form class="example-form">
    <mat-form-field class="example-full-width">
      <input matInput type="text" [formControl]="currencyInput" [advicentRivetCurrencyInput] />
    </mat-form-field>
    <mat-form-field class="example-full-width">
      <input matInput type="text" [formControl]="currencyInputWithDigits" [advicentRivetCurrencyInput] [advicentRivetCurrencyDigits]="2" />
    </mat-form-field>
    <mat-form-field class="example-full-width">
      <input matInput type="text" [formControl]="currencyInputWithMaxValue" [advicentRivetCurrencyInput]
      [advicentRivetCurrencyMaxValue]="1000" />
    </mat-form-field>
  </form>`
})
class TestComponent {
  currencyInput = new FormControl(35);
  currencyInputWithDigits = new FormControl(35);
  currencyInputWithMaxValue = new FormControl(35);
}


describe('RivetCurrencyInputDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputField: HTMLInputElement;
  let inputFieldWithDigits: HTMLInputElement;
  let inputFieldWithMaxValue: HTMLInputElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MaterialComponentModule, FormsModule, ReactiveFormsModule],
      declarations: [ TestComponent, RivetCurrencyInputDirective]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    const inputFields = fixture.nativeElement.querySelectorAll('input');
    inputField = inputFields[0];
    inputFieldWithDigits = inputFields[1];
    inputFieldWithMaxValue = inputFields[2];
    fixture.detectChanges();
  });

  it('initializes the input value correctly', () => {
    expect(inputField.value).toBe('$35');
  });

  it('updates the model correctly on change', () => {
    inputField.value = '$23.55';
    inputField.dispatchEvent(new Event('input'));
    expect(component.currencyInput.value).toBe(24);
    expect(inputField.value).toBe('$23.55');
  });

  it('updates the display value correctly on blur', () => {
    inputField.value = '$23.55';
    inputField.dispatchEvent(new Event('input'));
    inputField.dispatchEvent(new Event('blur'));
    expect(component.currencyInput.value).toBe(24);
    expect(inputField.value).toBe('$24');
  });

  it('updates the form validity correctly', () => {
    inputField.value = '$1.00.00';
    inputField.dispatchEvent(new Event('input'));
    expect(component.currencyInput.valid).toBeFalsy();

    inputField.value = '$1.00';
    inputField.dispatchEvent(new Event('input'));
    expect(component.currencyInput.valid).toBeTruthy();
  });

  it('updates the form dirty flag correctly', () => {
    expect(component.currencyInput.dirty).toBeFalsy();

    inputField.dispatchEvent(new Event('input'));
    expect(component.currencyInput.dirty).toBeTruthy();
  });

  it('updates the form touched flag correctly', () => {
    expect(component.currencyInput.touched).toBeFalsy();

    inputField.dispatchEvent(new Event('input'));
    expect(component.currencyInput.touched).toBeFalsy();

    inputField.dispatchEvent(new Event('blur'));
    expect(component.currencyInput.touched).toBeTruthy();
  });

  it('disables the input field correctly', () => {
    component.currencyInput.disable();
    fixture.detectChanges();
    expect(inputField.disabled).toBeTruthy();

    component.currencyInput.enable();
    fixture.detectChanges();
    expect(inputField.disabled).toBeFalsy();
  });

  it('handles the digits input correctly', () => {
    inputFieldWithDigits.value = '$23.5555';
    inputFieldWithDigits.dispatchEvent(new Event('input'));
    inputFieldWithDigits.dispatchEvent(new Event('blur'));
    expect(component.currencyInputWithDigits.value).toBe(23.56);
    expect(inputFieldWithDigits.value).toBe('$23.56');
  });

  it('handles the max value input correctly', () => {
    expect(component.currencyInputWithMaxValue.valid).toBeTruthy();
    inputFieldWithMaxValue.value = '$12000';
    inputFieldWithMaxValue.dispatchEvent(new Event('input'));
    expect(component.currencyInputWithMaxValue.valid).toBeFalsy();
  });
});
