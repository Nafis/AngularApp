import { TestBed } from '@angular/core/testing';

import { Apifake } from './apifake';

describe('Apifake', () => {
  let service: Apifake;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Apifake);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
