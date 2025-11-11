import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notconnected } from './notconnected';

describe('Notconnected', () => {
  let component: Notconnected;
  let fixture: ComponentFixture<Notconnected>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notconnected]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notconnected);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
