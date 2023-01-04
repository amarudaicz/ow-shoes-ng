import { TestBed } from '@angular/core/testing';

import { HandleAnimationLoginService } from './handle-animation-login.service';

describe('HandleAnimationLoginService', () => {
  let service: HandleAnimationLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleAnimationLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
