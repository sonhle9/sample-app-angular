import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState, selectAuthState } from '../../ngrx/app.states';
import { LogOut } from '../../ngrx/actions/auth.actions';

@Component({
  selector: 'app-layouts-header',
  templateUrl: './layouts-header.component.html',
  styleUrls: ['./layouts-header.component.scss']
})
export class LayoutsHeaderComponent implements OnInit {

  getState: Observable<any>;
  isAuthenticated = false;
  user = null;
  errorMessage = null;

  constructor(
    private store: Store<AppState>
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
      this.errorMessage = state.errorMessage;
    });
  }

  logOut(): void {
    this.store.dispatch(new LogOut());
  }
}
