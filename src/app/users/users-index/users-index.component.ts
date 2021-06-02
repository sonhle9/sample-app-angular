import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastService } from 'angular-toastify';
import { Observable } from 'rxjs/Observable';
import { User } from 'src/app/models/user';
import { AppState, selectAuthState } from '../../ngrx/app.states';
import { UsersIndexService } from './users-index.service';


@Component({
  selector: 'app-users-index',
  templateUrl: './users-index.component.html',
  styleUrls: ['./users-index.component.scss']
})
export class UsersIndexComponent implements OnInit {

  getState: Observable<any>;
  isAuthenticated = false;
  user!: User;
  errorMessage = '';

  itemsPerPage = 5;
  pageSize!: number;
  users: any[] = [];
  page = 1;
  total_count = 1;
  current_user!: User;
  @ViewChild('inputEl') private inputEl!: ElementRef;
  @ViewChild('inputImage') private inputImage!: ElementRef;

  constructor(
    private store: Store<AppState>,
    private service: UsersIndexService,
    private _toastService: ToastService
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getUsersWhenStartScreen();
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.current_user = state.user;
      this.errorMessage = state.errorMessage;
    });
  }

  getUsersWhenStartScreen = () => {
    this.service.getUsersWhenStartScreen(this.page).subscribe(
      (response: any) => {
        if (response.users) {
          this.users = response.users;
          this.total_count = response.total_count;
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

  removeUser = (index: number, userid: number) => {
    let sure = window.confirm('Are you sure?');
    if (sure === true) {
      this.service.removeUser(userid, this.page).subscribe(
        (response: any) => {
          if (response.flash) {
            const newUsers = [...this.users];
            newUsers.splice(index, 1);
            this.users = newUsers;
            // flashMessage(...response.data.flash)
            this._toastService.success('User deleted');
          }
        },
        (error: any) => console.log(error),
      );
    }
  }
}
