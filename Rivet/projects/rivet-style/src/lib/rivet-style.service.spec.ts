import { TestBed, inject } from '@angular/core/testing';

import { RivetStyleService } from './rivet-style.service';

describe('RivetStyleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RivetStyleService]
    });
  });

  it('should be created', inject([RivetStyleService], (service: RivetStyleService) => {
    expect(service).toBeTruthy();
  }));
});
