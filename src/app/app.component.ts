import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './ngrx/app.states';
import { GetStatus } from './ngrx/actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample-app-angular';
  constructor(private store: Store<AppState>){}
  ngOnInit() {
    this.store.dispatch(new GetStatus());
  }
}
