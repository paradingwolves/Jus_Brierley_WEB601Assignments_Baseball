import { TestBed } from '@angular/core/testing';

import { BaseballServiceService } from './baseball-service.service';

describe('BaseballServiceService', () => {
  let service: BaseballServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseballServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
