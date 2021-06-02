import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { tap } from 'rxjs/operators';

import { AuthService } from '../../auth.service';
import {
  AuthActionTypes,
  LogIn, LogInSuccess, LogInFailure,
  SignUp, SignUpSuccess, SignUpFailure,
  GetStatus,
  LogOut, GetStatusSuccess, GetStatusFailure, LogOutSuccess, LogOutFailure
} from '../actions/auth.actions';
import { User } from 'src/app/models/user';


@Injectable()
export class AuthEffects {

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}

  @Effect()
  LogIn: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN))
    .map((action: LogIn) => action.payload)
    .switchMap((payload: User) => {
      return this.authService.loginUser(payload)
        .map((user) => {
          return new LogInSuccess({user});
        })
        .catch((error) => {
          return Observable.of(new LogInFailure({ error: error }));
        });
    });


  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap((user) => {
      // localStorage.setItem('token', user.payload.token);
      // localStorage.setItem('token', user);
      this.router.navigateByUrl('/');
    })
  );

  @Effect({ dispatch: false })
  LogInFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_FAILURE)
  );

  @Effect()
  SignUp: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP))
    .map((action: SignUp) => action.payload)
    .switchMap((payload: User) => {
      return this.authService.registerUser(payload)
        .map((user) => {
          return new SignUpSuccess({token: user.token, email: payload.email});
        })
        .catch((error) => {
          return Observable.of(new SignUpFailure({ error: error }));
        });
    });

  @Effect({ dispatch: false })
  SignUpSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP_SUCCESS),
    tap((user) => {
      // localStorage.setItem('token', user.payload.token);
      localStorage.setItem('token', user);
      this.router.navigateByUrl('/');
    })
  );

  @Effect({ dispatch: false })
  SignUpFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP_FAILURE)
  );

  @Effect()
  public LogOut: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGOUT))
    .map((action: LogOut) => action)
    .switchMap(() => {
      return this.authService.logoutUser()
        .map(() => {
          return new LogOutSuccess();
        })
        .catch((error) => {
          return Observable.of(new LogOutFailure({ error: error }));
        });
    });

  @Effect({ dispatch: false })
  LogOutSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGOUT_SUCCESS),
    tap((user) => {
      // localStorage.setItem('token', user.payload.token);
      // localStorage.setItem('token', user);
      this.router.navigateByUrl('/');
    })
  );

  @Effect()
  GetStatus: Observable<any> = this.actions.pipe(
  ofType(AuthActionTypes.GET_STATUS))
  .switchMap(() => {
    return this.authService.getStatus()  
      .map((user) => {
        return new GetStatusSuccess({user});
      })
      .catch((error) => {
        return Observable.of(new GetStatusFailure({ error: error }));
      });
  });

  @Effect({ dispatch: false })
  GetStatusSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.GET_STATUS_SUCCESS),
    tap((user) => {
      // localStorage.setItem('token', user.payload.token);
      localStorage.setItem('token', user);
      // this.router.navigateByUrl('/');
    })
  );
}
