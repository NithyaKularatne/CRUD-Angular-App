import { TestBed } from '@angular/core/testing';

import { AddcountryService } from './addcountry.service';

describe('AddcountryService', () => {
  let service: AddcountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddcountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
