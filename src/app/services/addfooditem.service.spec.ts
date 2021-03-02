import { TestBed } from '@angular/core/testing';

import { AddfooditemService } from './addfooditem.service';

describe('AddfooditemService', () => {
  let service: AddfooditemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddfooditemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
