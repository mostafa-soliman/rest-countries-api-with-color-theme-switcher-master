import { TestBed } from '@angular/core/testing';

import { GetFligsService } from './get-fligs.service';

describe('GetFligsService', () => {
  let service: GetFligsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFligsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
