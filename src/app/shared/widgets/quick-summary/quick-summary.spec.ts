import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickSummary } from './quick-summary';

describe('QuickSummary', () => {
  let component: QuickSummary;
  let fixture: ComponentFixture<QuickSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(QuickSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
