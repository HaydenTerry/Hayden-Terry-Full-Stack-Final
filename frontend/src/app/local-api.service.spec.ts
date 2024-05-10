import { TestBed } from '@angular/core/testing';

import { LocalAPIService } from './local-api.service';

describe('LocalAPIService', () => {
  let service: LocalAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
