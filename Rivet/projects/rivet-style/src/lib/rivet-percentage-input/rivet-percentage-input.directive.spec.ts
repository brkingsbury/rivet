import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentModule } from '../material-component-module';
import { RivetPercentageInputDirective } from './rivet-percentage-input.directive';

@Component({
  template: `
  <form class="example-form">
    <mat-form-field class="example-full-width">
      <input matInput type="text" [formControl]="percentageInput" advicentRivetPercentageInput />
    </mat-form-field>
    <mat-form-field class="example-full-width">
      <input matInput type="text" [formControl]="percentageInputWithDigits" advicentRivetPercentageInput
      [advicentRivetPercentageFractionSize]="2" />
    </mat-form-field>
    <mat-form-field class="example-full-width">
      <input matInput type="text" [formControl]="percentageInputWithMaxValue" advicentRivetPercentageInput
      [advicentRivetPercentageMaxValue]="50" />
    </mat-form-field>
  </form>`
})
class TestComponent {
  percentageInput = new FormControl(0.35);
  percentageInputWithDigits = new FormControl(0.35);
  percentageInputWithMaxValue = new FormControl(0.35);
}

describe('RivetPercentageInputDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputField: HTMLInputElement;
  let inputFieldWithDigits: HTMLInputElement;
  let inputFieldWithMaxValue: HTMLInputElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MaterialComponentModule, FormsModule, ReactiveFormsModule],
      declarations: [TestComponent, RivetPercentageInputDirective]
    }).compileComponents();
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
    expect(inputField.value).toBe('35%');
  });

  it('updates the model correctly on change', () => {
    inputField.value = '35.55%';
    inputField.dispatchEvent(new Event('input'));
    expect(component.percentageInput.value).toBe(35.55);
    expect(inputField.value).toBe('35.55%');
  });

  it('updates the display value correctly on blur', () => {
    inputField.value = '35.55%';
    inputField.dispatchEvent(new Event('input'));
    inputField.dispatchEvent(new Event('blur'));
    expect(component.percentageInput.value).toBe(35.55);
    expect(inputField.value).toBe('36%');
  });

  it('updates the form validity correctly', () => {
    inputField.value = '1.00.00%';
    inputField.dispatchEvent(new Event('input'));
    expect(component.percentageInput.valid).toBeFalsy();
    inputField.value = '1.00%';
    inputField.dispatchEvent(new Event('input'));
    expect(component.percentageInput.valid).toBeTruthy();
  });

  it('updates the form dirty flag correctly', () => {
    expect(component.percentageInput.dirty).toBeFalsy();
    inputField.dispatchEvent(new Event('input'));
    expect(component.percentageInput.dirty).toBeTruthy();
  });

  it('updates the form touched flag correctly', () => {
    expect(component.percentageInput.touched).toBeFalsy();
    inputField.dispatchEvent(new Event('input'));
    expect(component.percentageInput.touched).toBeFalsy();
    inputField.dispatchEvent(new Event('blur'));
    expect(component.percentageInput.touched).toBeTruthy();
  });

  it('disables the input field correctly', () => {
    component.percentageInput.disable();
    fixture.detectChanges();
    expect(inputField.disabled).toBeTruthy();
    component.percentageInput.enable();
    fixture.detectChanges();
    expect(inputField.disabled).toBeFalsy();
  });

  it('handles the digits input correctly', () => {
    inputFieldWithDigits.value = '35.5555%';
    inputFieldWithDigits.dispatchEvent(new Event('input'));
    inputFieldWithDigits.dispatchEvent(new Event('blur'));
    expect(component.percentageInputWithDigits.value).toBe(35.5555);
    expect(inputFieldWithDigits.value).toBe('35.56%');
  });

  it('handles the max value input correctly', () => {
    expect(component.percentageInputWithMaxValue.valid).toBeTruthy();
    inputFieldWithMaxValue.value = '100%';
    inputFieldWithMaxValue.dispatchEvent(new Event('input'));
    expect(component.percentageInputWithMaxValue.valid).toBeFalsy();
  });
});
