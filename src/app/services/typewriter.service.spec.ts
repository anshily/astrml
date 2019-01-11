import { TestBed, inject } from '@angular/core/testing';

import { TypewriterService } from './typewriter.service';

describe('TypewriterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypewriterService]
    });
  });

  it('should be created', inject([TypewriterService], (service: TypewriterService) => {
    expect(service).toBeTruthy();
  }));
});
