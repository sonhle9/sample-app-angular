import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { AuthService } from '../../auth.service';
import {
  AuthActionTypes,
  GetStatusFailure, GetStatusSuccess, LogIn, LogInFailure, LogInSuccess,
  LogOut, LogOutFailure, LogOutSuccess, SignUp, SignUpFailure, SignUpSuccess
} from '../actions/auth.actions';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}

  LogIn$ = createEffect(
    () => this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN))
    .map((action: LogIn) => action.payload)
    .switchMap((payload: User) => {
      return this.authService.loginUser(payload)
        .map((user) => {
          return new LogInSuccess({user});
        })
        .catch((error) => {
          return Observable.of(new LogInFailure({ error }));
        });
    }
  ));

  LogInSuccess$ = createEffect(
    () => this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap(() => {
      this.router.navigateByUrl('/');
    })
  ),
  { dispatch: false }
  );

  LogInFailure$ = createEffect(
    () => this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN_FAILURE)
  ),
  { dispatch: false }
  );

  SignUp$ = createEffect(
    () => this.actions$.pipe(
    ofType(AuthActionTypes.SIGNUP))
    .map((action: SignUp) => action.payload)
    .switchMap((payload: User) => {
      return this.authService.registerUser(payload)
        .map((user) => {
          console.log('resp of signup', user);
          return new SignUpSuccess({token: user.token, email: payload.email});
        })
        .catch((error) => {
          return Observable.of(new SignUpFailure({ error }));
        });
    }
  ));

  SignUpSuccess$ = createEffect(
    () => this.actions$.pipe(
    ofType(AuthActionTypes.SIGNUP_SUCCESS),
    tap((user: any) => {
      localStorage.setItem('token', user);
      // this.router.navigateByUrl('/');
    })
  ),
  { dispatch: false }
  );

  SignUpFailure$ = createEffect(
    () => this.actions$.pipe(
    ofType(AuthActionTypes.SIGNUP_FAILURE)
  ),
  { dispatch: false }
  );

  LogOut$ = createEffect(
    () =>
    this.actions$.pipe(
    ofType(AuthActionTypes.LOGOUT))
    .map((action: LogOut) => action)
    .switchMap(() => {
      return this.authService.logoutUser()
        .map(() => {
          return new LogOutSuccess();
        })
        .catch((error: any) => {
          return Observable.of(new LogOutFailure({ error }));
        });
    }
    )
  );

  LogOutSuccess$ = createEffect(
    () => this.actions$.pipe(
    ofType(AuthActionTypes.LOGOUT_SUCCESS),
    tap(() => {
      this.router.navigateByUrl('/');
    })
  ),
  { dispatch: false }
  );

  GetStatus$ = createEffect(
    () => this.actions$.pipe(
  ofType(AuthActionTypes.GET_STATUS))
  .switchMap(() => {
    return this.authService.getStatus()
      .map((user) => {
        return new GetStatusSuccess({user});
      })
      .catch((error) => {
        return Observable.of(new GetStatusFailure({ error }));
      });
  }
  ));

  GetStatusSuccess$ = createEffect(
    () => this.actions$.pipe(
    ofType(AuthActionTypes.GET_STATUS_SUCCESS),
    tap((user: any) => {
      localStorage.setItem('token', user);
    })
  ),
  { dispatch: false }
  );
}
