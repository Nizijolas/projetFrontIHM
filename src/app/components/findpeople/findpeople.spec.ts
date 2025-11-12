import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Findpeople } from './findpeople';

describe('Findpeople', () => {
  let component: Findpeople;
  let fixture: ComponentFixture<Findpeople>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Findpeople]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Findpeople);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
