import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutsHeaderComponent } from './layouts-header.component';

describe('LayoutsHeaderComponent', () => {
  let component: LayoutsHeaderComponent;
  let fixture: ComponentFixture<LayoutsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
