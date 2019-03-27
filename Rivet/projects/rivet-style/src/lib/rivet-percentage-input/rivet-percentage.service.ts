import { getLocaleNumberSymbol, NumberSymbol } from '@angular/common';
import { Injectable } from '@angular/core';
import { unformat } from 'accounting';

@Injectable({
  providedIn: 'root'
})
export class RivetPercentageService {
  static Parse(value: string, locale = 'en-US'): number {
    const decimalSeparator = locale
      ? getLocaleNumberSymbol(locale, NumberSymbol.Decimal)
      : null;

    if (decimalSeparator && decimalSeparator !== '.') {
      value.replace(/[\.]/g, '');
      value = value.split(decimalSeparator).join('.');
    }

    const foo = value.match(/[^\d\s%\.,]/g);
    const bar = value.indexOf('.') !== value.lastIndexOf('.');
    if (foo || bar) {
      return null;
    }

    const rawValue = unformat(value.replace(/-/g, ''));
    return rawValue;
  }
}
