import { inject, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RivetCurrencyService } from './rivet-currency.service';


describe('RivetCurrencyParserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      providers: [RivetCurrencyService]
    });
  });

  describe('english', () => {
    it('parses a value correctly', inject([RivetCurrencyService], (service: RivetCurrencyService) => {
      expect(RivetCurrencyService.Parse('$19a9.99999', 2)).toBe(200);
    }));

    it('rounds to the passed in decimal points', inject([RivetCurrencyService], (service: RivetCurrencyService) => {
      expect(RivetCurrencyService.Parse('$19a9.777777', 2)).toBe(199.78);
    }));

    it('returns null if too many decimal points', inject([RivetCurrencyService], (service: RivetCurrencyService) => {
      expect(RivetCurrencyService.Parse('$19a9.7777.77', 2)).toBeNull();
    }));
  });

  describe('french', () => {
    it('parses a value correctly', inject([RivetCurrencyService], (service: RivetCurrencyService) => {
      expect(RivetCurrencyService.Parse('$19a9,99999', 2, 'fr-CA')).toBe(200);
    }));

    it('rounds to the passed in decimal points', inject([RivetCurrencyService], (service: RivetCurrencyService) => {
      expect(RivetCurrencyService.Parse('$19a9,777777', 2, 'fr-CA')).toBe(199.78);
    }));

    it('returns null if too many decimal points', inject([RivetCurrencyService], (service: RivetCurrencyService) => {
      expect(RivetCurrencyService.Parse('$19a9,7777,77', 2, 'fr-CA')).toBeNull();
    }));
  });

  it('should be created', inject([RivetCurrencyService], (service: RivetCurrencyService) => {
    expect(service).toBeTruthy();
  }));
});
