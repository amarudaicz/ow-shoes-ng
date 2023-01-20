import { TestBed } from '@angular/core/testing';

import { CartUserService } from './cart-user.service';

describe('CartUserService', () => {
  let service: CartUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
