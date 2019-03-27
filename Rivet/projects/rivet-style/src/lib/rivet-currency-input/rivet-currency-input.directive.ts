import { CurrencyPipe } from '@angular/common';
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Inject,
  Input,
  LOCALE_ID,
  OnInit
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { currencyValidator } from './rivet-currency-validator';
import { RivetCurrencyService } from './rivet-currency.service';

@Directive({
  selector: '[advicentRivetCurrencyInput]'
})
export class RivetCurrencyInputDirective
  implements OnInit, ControlValueAccessor {
  @Inject(LOCALE_ID) public locale: string;

  @Input()
  advicentRivetCurrencyInput: string;
  @Input()
  advicentRivetCurrencyDigits = 0;
  @Input()
  advicentRivetCurrencyMaxValue = 200000000000;

  @HostBinding('disabled')
  disabled = false;

  onChange = (_: any) => {};
  onTouched = () => {};

  constructor(private elementRef: ElementRef, private controlDir: NgControl) {
    controlDir.valueAccessor = this;
  }

  ngOnInit(): void {
    const control = this.controlDir.control;
    const validator = currencyValidator(this.advicentRivetCurrencyMaxValue);
    control.setValidators(
      control.validator ? [control.validator, validator] : validator
    );
    control.updateValueAndValidity();
  }

  @HostListener('input', ['$event.target.value'])
  input(value) {
    const parsedValue = RivetCurrencyService.Parse(
      value,
      this.advicentRivetCurrencyDigits
    );
    this.onChange(parsedValue);
  }

  @HostListener('blur')
  onTouchHandler() {
    this.onTouched();
    if (this.controlDir.valid) {
      this.writeValue(this.controlDir.value);
    }
  }

  writeValue(value: any): void {
    const digitsInfo =
      '1.' +
      this.advicentRivetCurrencyDigits +
      '-' +
      this.advicentRivetCurrencyDigits;
    this.elementRef.nativeElement.value = new CurrencyPipe(
      this.locale || 'en-US'
    ).transform(value, undefined, undefined, digitsInfo);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
