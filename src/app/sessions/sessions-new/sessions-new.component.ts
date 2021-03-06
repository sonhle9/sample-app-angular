import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { Title } from '@angular/platform-browser';
import { User } from '../../models/user';
import { Store } from '@ngrx/store';
import { AppState, selectAuthState } from '../../ngrx/app.states';
import { LogIn } from '../../ngrx/actions/auth.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sessions-new',
  templateUrl: './sessions-new.component.html',
  styleUrls: ['./sessions-new.component.scss']
})
export class SessionsNewComponent implements OnInit {

  user: User = new User();
  loginForm: any;
  errorMessage = '';
  getState: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toastService: ToastService,
    private titleService: Title,
    private store: Store<AppState>
  ) {
    this.loginForm = [];
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.titleService.setTitle('Log in');
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
    this.loginForm = this.fb.group({
      session: this.fb.group({
        email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
        password: ['', [Validators.required]],
        remember_me: [false],
      }),
    }, { });
  }

  onSubmit(): any {
    this.store.dispatch(new LogIn(this.loginForm.value));
  }

}
