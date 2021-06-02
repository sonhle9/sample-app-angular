import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState, selectAuthState } from '../../ngrx/app.states';
import { HomeService } from './home.service';
import { ToastService } from 'angular-toastify';
import { User } from 'src/app/models/user';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  getState: Observable<any>;
  isAuthenticated = false;
  user!: User;

  page = 1;
  itemsPerPage = 5;
  pageSize!: number;
  feedItems!: any[];
  totalCount = 1;
  following = null;
  followers = null;
  micropost = 0;
  gravatar!: string;
  content = '';
  image!: string;
  errorMessage = '';
  @ViewChild('inputEl') private inputEl!: ElementRef;
  @ViewChild('inputImage') private inputImage!: ElementRef;

  constructor(
    private store: Store<AppState>,
    private service: HomeService,
    private toastService: ToastService
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
      this.errorMessage = state.errorMessage;
    });
    this.isAuthenticated ? this.setFeedsWhenStartScreen() : null;
  }

  setFeedsWhenStartScreen = () => {
    this.service.getMicropostFeed(this.page).subscribe(
      (response: any) => {
        if (response.feed_items) {
          this.feedItems = response.feed_items;
          this.totalCount = response.total_count;
          this.following = response.following;
          this.followers = response.followers;
          this.micropost = response.micropost;
          this.gravatar = response.gravatar;
        } else {
          this.feedItems = [];
        }
      },
      error => console.log(error),
    );
  }

  public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage * (pageNum - 1);
    this.setFeedsWhenStartScreen();
  }

  public changePagesize(num: number): void {
    this.itemsPerPage = this.pageSize + num;
  }

  handleContentInput = (e: any) => { // without type info
    this.content += e.target.value;
  }

  handleImageInput = (e: any) => {
    if (e.target.files[0]) {
      const sizeInMegabytes = e.target.files[0].size / 1024 / 1024;
      if (sizeInMegabytes > 512) {
        alert('Maximum file size is 512MB. Please choose a smaller file.');
        this.image = '';
        e.target.value = null;
      } else {
        this.image = e.target.files[0];
      }
    }
  }

  handleSubmit = (e: any) => {
    const formData = new FormData();
    formData.append('micropost[content]',
      this.content
    );
    if (this.image) {
      formData.append('micropost[image]',
        this.image,
        this.inputImage.nativeElement.value.name
      );
    }

    let BASE_URL = '';
    if (environment.production) {
      BASE_URL = 'https://railstutorialapi.herokuapp.com/api';
    } else {
      BASE_URL = 'http://localhost:3001/api';
    }

    fetch(BASE_URL + `/microposts`, {
      method: 'POST',
      body: formData,
      credentials: 'include'
    })
      .then(response => response.json().then(data => {

        if (data.flash) {
          this.inputEl.nativeElement.blur();
          // flashMessage(...data.flash)
          this.toastService.success('Micropost created!');
          this.content = '';
          this.image = '';
          // document.querySelector('[name='micropost[image]']').value = null;
          this.inputImage.nativeElement.value = null;
          this.errorMessage = '';
          this.setFeedsAfterAction();
        }
        if (data.error) {
          this.inputEl.nativeElement.blur();
          this.errorMessage = data.error;
        }

      })
      );

    e.preventDefault();
  }

  setFeedsAfterAction = () => {
    this.service.getMicropostFeed(this.page).subscribe(
      (response: any) => {
        if (response.feed_items) {
          this.feedItems = response.feed_items;
          this.totalCount = response.total_count;
          this.micropost = response.micropost;
        } else {
          this.feedItems = [];
        }
      },
      error => console.log(error),
    );
  }

  removeMicropost = (micropostid: number) => {
    this.service.removeMicropost(micropostid).subscribe(
      (response: any) => {
        if (response.flash) {
          // flashMessage(...response.flash)
          this.toastService.success('Micropost deleted');
          this.setFeedsAfterAction();
        }
      },
      error => console.log(error),
    );
  }
}
