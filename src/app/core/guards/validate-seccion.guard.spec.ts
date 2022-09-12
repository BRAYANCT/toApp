import { TestBed } from '@angular/core/testing';

import { ValidateSeccionGuard } from './validate-seccion.guard';

describe('ValidateSeccionGuard', () => {
  let guard: ValidateSeccionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidateSeccionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
