import { getLocaleNumberSymbol, NumberSymbol } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RivetCurrencyService {
  static Parse(value: string, decimalPlaces: number, locale = 'en-US'): number {
    const decimalSeparator = locale ? getLocaleNumberSymbol(locale, NumberSymbol.Decimal) : null;

    if (decimalSeparator && decimalSeparator !== '.') {
      value.replace(/[\.]/g, '');
      value = value.split(decimalSeparator).join('.');
    }

    if (value.indexOf('.') !== value.lastIndexOf('.')) {
      return null;
    }

    const rawValue = +value.replace(/[^\d.]/g, '');
    return Math.round(rawValue * Math.pow(10, decimalPlaces)) / (Math.pow(10, decimalPlaces));
  }
}
