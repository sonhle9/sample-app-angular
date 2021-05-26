import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState, selectAuthState } from '../../ngrx/app.states';

@Component({
  selector: 'app-static-pages-home',
  templateUrl: './static-pages-home.component.html',
  styleUrls: ['./static-pages-home.component.scss']
})
export class StaticPagesHomeComponent implements OnInit {

  getState: Observable<any>;
  isAuthenticated = false;
  user = null;
  errorMessage = null;

  constructor(
    private store: Store<AppState>
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
      this.errorMessage = state.errorMessage;
    });
  }

}
