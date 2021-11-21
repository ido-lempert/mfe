import { TestBed } from '@angular/core/testing';

import { CreditRatingService } from './credit-rating.service';

describe('CreditRatingService', () => {
  let service: CreditRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
