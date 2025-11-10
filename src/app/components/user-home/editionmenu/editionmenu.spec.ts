import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editionmenu } from './editionmenu';

describe('Editionmenu', () => {
  let component: Editionmenu;
  let fixture: ComponentFixture<Editionmenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Editionmenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Editionmenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
