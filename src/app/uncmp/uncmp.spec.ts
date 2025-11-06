import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uncmp } from './uncmp';

describe('Uncmp', () => {
  let component: Uncmp;
  let fixture: ComponentFixture<Uncmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Uncmp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uncmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
