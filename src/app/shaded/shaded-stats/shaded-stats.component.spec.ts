import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadedStatsComponent } from './shaded-stats.component';

describe('ShadedStatsComponent', () => {
  let component: ShadedStatsComponent;
  let fixture: ComponentFixture<ShadedStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadedStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadedStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
