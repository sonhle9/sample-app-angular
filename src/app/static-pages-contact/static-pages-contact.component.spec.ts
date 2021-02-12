import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticPagesContactComponent } from './static-pages-contact.component';

describe('StaticPagesContactComponent', () => {
  let component: StaticPagesContactComponent;
  let fixture: ComponentFixture<StaticPagesContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticPagesContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticPagesContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
