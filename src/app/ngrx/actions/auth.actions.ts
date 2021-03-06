import { Action } from '@ngrx/store';


export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
  SIGNUP = '[Auth] Signup',
  SIGNUP_SUCCESS = '[Auth] Signup Success',
  SIGNUP_FAILURE = '[Auth] Signup Failure',
  LOGOUT = '[Auth] Logout',
  LOGOUT_SUCCESS = '[Auth] Logout Success',
  LOGOUT_FAILURE = '[Auth] Logout Failure',
  GET_STATUS = '[Auth] GetStatus',
  GET_STATUS_SUCCESS = '[Auth] GetStatus Success',
  GET_STATUS_FAILURE = '[Auth] GetStatus Failure'
}

export class LogIn implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: any) {}
}

export class LogInSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class LogInFailure implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILURE;
  constructor(public payload: any) {}
}

export class SignUp implements Action {
  readonly type = AuthActionTypes.SIGNUP;
  constructor(public payload: any) {}
}

export class SignUpSuccess implements Action {
  readonly type = AuthActionTypes.SIGNUP_SUCCESS;
  constructor(public payload: any) {}
}

export class SignUpFailure implements Action {
  readonly type = AuthActionTypes.SIGNUP_FAILURE;
  constructor(public payload: any) {}
}

export class LogOut implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export class LogOutSuccess implements Action {
  readonly type = AuthActionTypes.LOGOUT_SUCCESS;
}

export class LogOutFailure implements Action {
  readonly type = AuthActionTypes.LOGOUT_FAILURE;
  constructor(public payload: any) {}
}

export class GetStatus implements Action {
  readonly type = AuthActionTypes.GET_STATUS;
}

export class GetStatusSuccess implements Action {
  readonly type = AuthActionTypes.GET_STATUS_SUCCESS;
  constructor(public payload: any) {}
}

export class GetStatusFailure implements Action {
  readonly type = AuthActionTypes.GET_STATUS_FAILURE;
  constructor(public payload: any) {}
}

export type All =
  | LogIn
  | LogInSuccess
  | LogInFailure
  | SignUp
  | SignUpSuccess
  | SignUpFailure
  | LogOut
  | LogInSuccess
  | LogOutFailure
  | GetStatus
  | GetStatusSuccess
  | GetStatusFailure;
