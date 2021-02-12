import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersShowFollowingComponent } from './users-show-following.component';

describe('UsersShowFollowingComponent', () => {
  let component: UsersShowFollowingComponent;
  let fixture: ComponentFixture<UsersShowFollowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersShowFollowingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersShowFollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
