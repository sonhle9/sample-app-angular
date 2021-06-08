import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastService } from 'angular-toastify';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AppState, selectAuthState } from 'src/app/ngrx/app.states';
import { UsersShowService } from './users-show.service';

@Component({
  selector: 'app-users-show',
  templateUrl: './users-show.component.html',
  styleUrls: ['./users-show.component.scss']
})
export class UsersShowComponent implements OnInit {

  getState!: Observable<any>;
  isAuthenticated = false;
  errorMessage = '';
  pageSize!: number;
  itemsPerPage = 5;

  user: any = {};
  microposts: any = [];
  id_relationships = null;
  page = 1;
  total_count = 1;
  current_user!: User;
  id!: number;

  constructor(
    private service: UsersShowService,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private store: Store<AppState>,
  ) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id') || '', 10);
      this.id = id;
    });
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): any {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.current_user = state.user;
      this.errorMessage = state.errorMessage;
    });
    this.getShowUserPageInfo();
  }

  getShowUserPageInfo = () => {
    this.service.getShowUserPageInfo(this.id, this.page).subscribe(
      response => {
        if (response.user) {
          this.user = response.user;
          this.microposts = response.microposts;
          this.total_count = response.total_count;
          this.id_relationships = response.id_relationships;
        } else {
          this.user = {};
          this.microposts = [];
        }
      },
      error => console.error('Error!', error)
    );
  }

  public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage * (pageNum - 1);
    this.getShowUserPageInfo();
  }

  public changePagesize(num: number): void {
    this.itemsPerPage = this.pageSize + num;
  }

  handleUnfollow = (e: Event) => {
    this.service.deleteHandleUnfollow(this.id_relationships).subscribe(
      response => {
        if (response.unfollow) {
          this.getShowUserPageInfo();
        }
      },
      error => console.log(error),
    );
    e.preventDefault();
  }

  handleFollow = (e: Event) => {
    this.service.postHandleFollow(this.id).subscribe(
      response => {
        if (response.follow) {
          this.getShowUserPageInfo();
        }
      },
      error => console.log(error),
    );
    e.preventDefault();
  }

  removeMicropost = (micropostid: number) => {
    this.service.removeMicropost(micropostid).subscribe(
      (response: any) => {
        if (response.flash) {
          // flashMessage(...response.flash)
          this.toastService.success('Micropost deleted');
          this.getShowUserPageInfo();
        }
      },
      error => console.log(error),
    );
  }
}
