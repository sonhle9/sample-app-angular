import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticPagesAboutComponent } from './static-pages-about.component';

describe('StaticPagesAboutComponent', () => {
  let component: StaticPagesAboutComponent;
  let fixture: ComponentFixture<StaticPagesAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticPagesAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticPagesAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
