import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersShowFollowComponent } from './users-show-follow.component';

describe('UsersShowFollowComponent', () => {
  let component: UsersShowFollowComponent;
  let fixture: ComponentFixture<UsersShowFollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersShowFollowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersShowFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
