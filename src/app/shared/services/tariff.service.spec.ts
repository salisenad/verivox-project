import { TestBed } from '@angular/core/testing';

import { TariffService } from './tariff.service';

describe('ResultService', () => {
  let service: TariffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TariffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
