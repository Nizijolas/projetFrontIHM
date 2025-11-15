import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleCardFind } from './people-card-find';

describe('PeopleCardFind', () => {
  let component: PeopleCardFind;
  let fixture: ComponentFixture<PeopleCardFind>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleCardFind]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleCardFind);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
