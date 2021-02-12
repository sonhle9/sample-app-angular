import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersShowFollowersComponent } from './users-show-followers.component';

describe('UsersShowFollowersComponent', () => {
  let component: UsersShowFollowersComponent;
  let fixture: ComponentFixture<UsersShowFollowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersShowFollowersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersShowFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
