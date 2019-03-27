import { inject, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RivetPercentageService } from './rivet-percentage.service';

describe('RivetPercentageParserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      providers: [RivetPercentageService]
    });
  });

  it('should be created', inject(
    [RivetPercentageService],
    (service: RivetPercentageService) => {
      expect(service).toBeTruthy();
    }
  ));

  describe('english', () => {
    describe('correctly parses a value', () => {
      it('with a symbol and no decimal points', () => {
        expect(RivetPercentageService.Parse('100%')).toBe(100);
      });

      it('with a symbol and decimal points', () => {
        expect(RivetPercentageService.Parse('100.5%')).toBe(100.5);
      });

      it('with no symbol and decimal points', () => {
        expect(RivetPercentageService.Parse('100.5')).toBe(100.5);
      });

      it('with no symbol and no decimal points', () => {
        expect(RivetPercentageService.Parse('100')).toBe(100);
      });

      it('with a comma, symbol, and decimal points', () => {
        expect(RivetPercentageService.Parse('1,000.5%')).toBe(1000.5);
      });

      it('with two commas, symbol, and decimal points', () => {
        expect(RivetPercentageService.Parse('1,000,000.5%')).toBe(1000000.5);
      });

      it('with a negative symbol', () => {
        expect(RivetPercentageService.Parse('-100%')).toBeNull();
      });

      it('with a random symbol', () => {
        expect(RivetPercentageService.Parse('1a00%')).toBeNull();
      });
    });

    it('returns null if too many decimal points', () => {
      expect(RivetPercentageService.Parse('100.5.5%')).toBeNull();
    });
  });

  describe('french', () => {
    describe('correctly parses a value', () => {
      it('with a symbol and no decimal points', () => {
        expect(RivetPercentageService.Parse('100%', 'fr-CA')).toBe(100);
      });

      it('with a symbol and decimal points', () => {
        expect(RivetPercentageService.Parse('100,5%', 'fr-CA')).toBe(100.5);
      });

      it('with no symbol and decimal points', () => {
        expect(RivetPercentageService.Parse('100,5', 'fr-CA')).toBe(100.5);
      });

      it('with no symbol and no decimal points', () => {
        expect(RivetPercentageService.Parse('100', 'fr-CA')).toBe(100);
      });

      it('with a space, symbol, and decimal points', () => {
        expect(RivetPercentageService.Parse('1 000,5%', 'fr-CA')).toBe(1000.5);
      });

      it('with two spaces, symbol, and decimal points', () => {
        expect(RivetPercentageService.Parse('1 000 000,5%', 'fr-CA')).toBe(
          1000000.5
        );
      });

      it('with a negative symbol', () => {
        expect(RivetPercentageService.Parse('-100%', 'fr-CA')).toBeNull();
      });

      it('with a random symbol', () => {
        expect(RivetPercentageService.Parse('1a00%', 'fr-CA')).toBeNull();
      });
    });

    it('returns null if too many decimal points', () => {
      expect(RivetPercentageService.Parse('100,5,5%', 'fr-CA')).toBeNull();
    });
  });
});
