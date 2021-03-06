import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ForbiddenNameValidator } from './shared/user-name.validator';
import { Title } from '@angular/platform-browser';
import { User } from '../../models/user';
import { Store } from '@ngrx/store';
import { AppState, selectAuthState } from '../../ngrx/app.states';
import { SignUp } from '../../ngrx/actions/auth.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-users-new',
  templateUrl: './users-new.component.html',
  styleUrls: ['./users-new.component.scss']
})
export class UsersNewComponent implements OnInit {

  user: User = new User();
  registrationForm: any;
  errorMessage = '';
  getState: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private titleService: Title,
    private store: Store<AppState>
  ) {
    this.registrationForm = [];
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.titleService.setTitle('Sign up');
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
    this.registrationForm = this.fb.group({
      user: this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3), ForbiddenNameValidator(/password/)]],
        email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
        password: ['', [Validators.required]],
        password_confirmation: ['', [Validators.required]],
      }),
    }, { /* validator: PasswordValidator */ });
  }

  get name() {
    return this.registrationForm.get('user').get('name');
  }

  get email() {
    return this.registrationForm.get('user').get('email');
  }

  get password() {
    return this.registrationForm.get('user').get('password');
  }

  get password_confirmation() {
    return this.registrationForm.get('user').get('password_confirmation');
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this.store.dispatch(new SignUp(this.registrationForm.value));
  }
}
