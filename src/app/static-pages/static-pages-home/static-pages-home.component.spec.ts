import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticPagesHomeComponent } from './static-pages-home.component';

describe('StaticPagesHomeComponent', () => {
  let component: StaticPagesHomeComponent;
  let fixture: ComponentFixture<StaticPagesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticPagesHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticPagesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
