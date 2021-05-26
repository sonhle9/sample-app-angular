import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadedErrorMessagesComponent } from './shaded-error-messages.component';

describe('ShadedErrorMessagesComponent', () => {
  let component: ShadedErrorMessagesComponent;
  let fixture: ComponentFixture<ShadedErrorMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadedErrorMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadedErrorMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
