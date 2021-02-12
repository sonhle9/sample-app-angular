import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutsFooterComponent } from './layouts-footer.component';

describe('LayoutsFooterComponent', () => {
  let component: LayoutsFooterComponent;
  let fixture: ComponentFixture<LayoutsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutsFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
