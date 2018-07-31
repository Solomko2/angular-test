import { TestBed, inject } from '@angular/core/testing';

import { FancyService } from './fancy.service';

describe('FancyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FancyService]
    });
  });

  it('should be created', inject([FancyService], (service: FancyService) => {
    expect(service).toBeTruthy();
  }));
});
