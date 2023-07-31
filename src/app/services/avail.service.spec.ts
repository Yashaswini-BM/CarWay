import { TestBed } from '@angular/core/testing';

import { AvailService } from './avail.service';

describe('AvailService', () => {
  let service: AvailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
