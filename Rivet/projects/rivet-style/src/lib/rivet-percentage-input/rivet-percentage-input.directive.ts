import { PercentPipe } from '@angular/common';
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
import { percentageValidator } from './rivet-percentage-validator';
import { RivetPercentageService } from './rivet-percentage.service';

@Directive({
  selector: '[advicentRivetPercentageInput]'
})
export class RivetPercentageInputDirective
  implements OnInit, ControlValueAccessor {
  @Inject(LOCALE_ID)
  public locale: string;

  @Input()
  advicentRivetPercentageFractionSize = 0;
  @Input()
  advicentRivetPercentageMaxValue = 100;

  @HostBinding('disabled')
  disabled = false;

  onChange = (_: any) => {};
  onTouched = () => {};

  constructor(private elementRef: ElementRef, private controlDir: NgControl) {
    controlDir.valueAccessor = this;
  }

  ngOnInit(): void {
    const control = this.controlDir.control;
    const validator = percentageValidator(this.advicentRivetPercentageMaxValue);
    control.setValidators(
      control.validator ? [control.validator, validator] : validator
    );
    control.updateValueAndValidity();
  }

  @HostListener('input', ['$event.target.value'])
  input(value) {
    const parsedValue = RivetPercentageService.Parse(value, this.locale);
    this.onChange(parsedValue);
  }

  @HostListener('blur')
  onTouchHandler() {
    if (this.controlDir.valid) {
      const value = this.controlDir.value / 100;
      this.writeValue(value);
    }
    this.onTouched();
  }

  writeValue(value: any): void {
    const digitsInfo = '1.0-' + this.advicentRivetPercentageFractionSize;
    this.elementRef.nativeElement.value = new PercentPipe(
      this.locale || 'en-US'
    ).transform(value, digitsInfo);
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
