import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadedApiComponent } from './shaded-api.component';

describe('ShadedApiComponent', () => {
  let component: ShadedApiComponent;
  let fixture: ComponentFixture<ShadedApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadedApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadedApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
