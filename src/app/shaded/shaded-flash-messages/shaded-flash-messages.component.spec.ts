import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadedFlashMessagesComponent } from './shaded-flash-messages.component';

describe('ShadedFlashMessagesComponent', () => {
  let component: ShadedFlashMessagesComponent;
  let fixture: ComponentFixture<ShadedFlashMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadedFlashMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadedFlashMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
