/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CloudinaryService } from './cloudinary.service';

describe('Service: Cloudinary', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CloudinaryService]
    });
  });

  it('should ...', inject([CloudinaryService], (service: CloudinaryService) => {
    expect(service).toBeTruthy();
  }));
});
