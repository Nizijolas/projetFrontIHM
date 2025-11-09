import { TestBed } from '@angular/core/testing';

import { Connexions } from './connexions';

describe('Connexions', () => {
  let service: Connexions;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Connexions);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
