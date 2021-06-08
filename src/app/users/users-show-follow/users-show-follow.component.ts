import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastService } from 'angular-toastify';
import { Observable } from 'rxjs/Observable';
import { User } from 'src/app/models/user';
import { AppState, selectAuthState } from '../../ngrx/app.states';
import { UsersShowFollowService } from './users-show-follow.service';

@Component({
  selector: 'app-users-show-follow',
  templateUrl: './users-show-follow.component.html',
  styleUrls: ['./users-show-follow.component.scss']
})
export class UsersShowFollowComponent implements OnInit {

  getState: Observable<any>;
  isAuthenticated = false;
  user!: any;
  errorMessage = '';

  itemsPerPage = 5;
  pageSize!: number;
  users: any[] = [];
  xusers: any[] = [];
  page = 1;
  total_count = 1;
  current_user!: User;
  id!: number;
  lastUrlSegment!: string;

  constructor(
    private store: Store<AppState>,
    private service: UsersShowFollowService,
    private toastService: ToastService,
    private route: ActivatedRoute,
    private titleService: Title,
  ) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id') || '', 10);
      this.id = id;
      this.lastUrlSegment = this.route.snapshot.url[1].path;
    });
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.lastUrlSegment.charAt(0).toUpperCase() + this.lastUrlSegment.slice(1) + ' | Ruby on Rails Tutorial Sample App');
    this.getUsersWhenStartScreen();
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.current_user = state.user;
      this.errorMessage = state.errorMessage;
    });
  }

  getUsersWhenStartScreen = () => {
    this.service.getUsersWhenStartScreen(this.id, this.page, this.lastUrlSegment).subscribe(
      (response: any) => {
        if (response.users) {
          this.users = response.users;
          this.xusers = response.xusers;
          this.total_count = response.total_count;
          this.user = response.user;
        } else {
          this.users = [];
        }
      },
      (error: any) => console.log(error),
    );
  }

  public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage * (pageNum - 1);
    this.getUsersWhenStartScreen();
  }

  public changePagesize(num: number): void {
    this.itemsPerPage = this.pageSize + num;
  }

  removeUser = (userid: number) => {
    const sure = window.confirm('Are you sure?');
    if (sure === true) {
      this.service.removeUser(userid).subscribe(
        (response: any) => {
          if (response.flash) {
            this.toastService.success('User deleted');
            this.getUsersWhenStartScreen();
          }
        },
        (error: any) => console.log(error),
      );
    }
  }
}
