import { TestBed } from '@angular/core/testing';

import { HousesApiService } from './houses-api.service';

describe('HousesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HousesApiService = TestBed.get(HousesApiService);
    expect(service).toBeTruthy();
  });
});
