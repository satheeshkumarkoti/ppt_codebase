import { TestBed } from '@angular/core/testing';

import { ProplanService } from './proplan.service';

describe('ProplanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProplanService = TestBed.get(ProplanService);
    expect(service).toBeTruthy();
  });
});
