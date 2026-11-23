import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Streaks } from './streaks';

describe('Streaks', () => {
  let component: Streaks;
  let fixture: ComponentFixture<Streaks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Streaks],
    }).compileComponents();

    fixture = TestBed.createComponent(Streaks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
