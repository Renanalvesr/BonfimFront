import { TestBed } from '@angular/core/testing';

import { GraduationService } from './graduation.service';

describe('GraduationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GraduationService = TestBed.get(GraduationService);
    expect(service).toBeTruthy();
  });
});
