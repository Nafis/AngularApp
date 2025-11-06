import { TestBed } from '@angular/core/testing';

import { Lesrv } from './lesrv';

describe('Lesrv', () => {
  let service: Lesrv;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lesrv);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
