import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayScores } from './display-scores';

describe('DisplayScores', () => {
  let component: DisplayScores;
  let fixture: ComponentFixture<DisplayScores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayScores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayScores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
