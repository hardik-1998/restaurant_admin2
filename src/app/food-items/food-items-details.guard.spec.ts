import { TestBed } from '@angular/core/testing';

import { FoodItemsDetailsGuard } from './food-items-details.guard';

describe('FoodItemsDetailsGuard', () => {
  let guard: FoodItemsDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FoodItemsDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
