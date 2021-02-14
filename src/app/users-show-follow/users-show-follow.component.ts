import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-show-follow',
  templateUrl: './users-show-follow.component.html',
  styleUrls: ['./users-show-follow.component.scss']
})
export class UsersShowFollowComponent implements OnInit {

  public master = 'Matt';
  public maessage = "";

  constructor() { }

  ngOnInit(): void {
  }

}
