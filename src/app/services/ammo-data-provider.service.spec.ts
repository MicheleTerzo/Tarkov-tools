import { TestBed } from '@angular/core/testing';

import { AmmoDataProviderService } from './ammo-data-provider.service';

describe('AmmoDataProviderService', () => {
  let service: AmmoDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmmoDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
