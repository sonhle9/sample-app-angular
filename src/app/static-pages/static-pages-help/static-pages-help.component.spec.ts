import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticPagesHelpComponent } from './static-pages-help.component';

describe('StaticPagesHelpComponent', () => {
  let component: StaticPagesHelpComponent;
  let fixture: ComponentFixture<StaticPagesHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticPagesHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticPagesHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
