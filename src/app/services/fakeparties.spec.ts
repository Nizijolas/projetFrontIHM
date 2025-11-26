import { TestBed } from '@angular/core/testing';

import { Fakeparties } from './fakeparties';

describe('Fakeparties', () => {
  let service: Fakeparties;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fakeparties);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
