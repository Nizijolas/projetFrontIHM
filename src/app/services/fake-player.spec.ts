import { TestBed } from '@angular/core/testing';

import { FakePlayer } from './fake-player';

describe('FakePlayer', () => {
  let service: FakePlayer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakePlayer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
