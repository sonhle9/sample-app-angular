import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsNewComponent } from './sessions-new.component';

describe('SessionsNewComponent', () => {
  let component: SessionsNewComponent;
  let fixture: ComponentFixture<SessionsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionsNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
